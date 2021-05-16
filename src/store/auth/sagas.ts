import { Task } from '@redux-saga/types';
import { LOCATION_CHANGE } from 'connected-react-router';
import {  call, cancel, delay, fork, put, race, select, take, takeLatest } from 'redux-saga/effects';
import { loginUser, logoutUser, refreshUserToken , changePasswordUser} from '../../api/auth/requests';
import * as A from './actions';
import { AuthAction, AuthActionType, Auth, AuthState, LoggedStatus, AuthStorage } from './constants';
import { resetTokenInStorage, setTokenInStorage, getTokenInStorage } from './helpers';
import { loggedInStatusSelector } from './selectors';

export function* authWatcher() {
   yield takeLatest(AuthActionType.LoginRequest, loginWorker);
   yield takeLatest(AuthActionType.LogoutRequest, logoutWorker);
   yield takeLatest(AuthActionType.ChangePasswordRequest, changePasswordWorker);
   yield takeLatest(AuthActionType.LogoutSuccess, resetTokenInStorage);
   yield takeLatest(AuthActionType.LogoutSuccess, cancelRefreshWorker);

   if (!SERVER_BUILD) {
      yield fork(initialAuth);
   }
}

let refreshTask: Task;

export function* initialAuth() {
   const { token, expiresIn, personId } = yield call(getTokenInStorage);

   if (token) {
      yield put(A.loginSuccess({ personId, name: '', role: undefined }, { expiresIn, token, loggedIn: LoggedStatus.LoggedIn }));
   } else {
      yield put(A.logoutSuccess());
   }
}

function* cancelRefreshWorker() {
   if (refreshTask && refreshTask.isRunning()) {
      yield cancel(refreshTask);
   }
}

export function* loginWorker(action: AuthAction) {
   if (action.type === AuthActionType.LoginRequest) {
      try {
         const { data: { auth, user } }: { data: AuthState } = yield call(loginUser, action.user, action.password);

         const token: string = auth.token;
         const expiresIn: number = auth.expiresIn;

         yield call(setTokenInStorage, token, expiresIn, user.personId);

         yield put(A.loginSuccess(user, auth));

         refreshTask = yield fork(refreshTokenWorker);

      } catch (error) {
         const parsedError = error.toJSON();

         if (parsedError.message.includes('401')) {
            yield put(A.loginSuccess(undefined, undefined, { error: 'Logowanie się nie powiopdło. Sprawdź czy masz poprawny login i hasło.' }));
            return;
         }
         yield put(A.loginFail(error));
      }
   }
}

export function* changePasswordWorker(action: AuthAction) {
   if (action.type === AuthActionType.ChangePasswordRequest) {
      try {
         yield call(changePasswordUser, action.oldPassword, action.newPassword);

         yield put(A.changePasswordSuccess());

      } catch (error) {
         yield put(A.changePasswordFail(error));
      }
   }
}

export function* refreshTokenWorker() {
   while (true) {
      try {
         const initialTime = +new Date();
         const { expiresIn, personId }: AuthStorage = yield call(getTokenInStorage);
         const expiresTime = (expiresIn * 1000) - 5000

         const { winner } = yield race({
            winner: take(LOCATION_CHANGE),
            error: delay(expiresTime),
         });

         if (winner) {
            const executeTime = +new Date();
            const toExpiresTime = expiresTime - (executeTime - initialTime);

            if (toExpiresTime > 60000) {
               yield delay(60000);
            }
            const { data }: { data: Auth } = yield call(refreshUserToken);

            const token: string = data.token;
            const expiresIn: number = data.expiresIn;

            yield call(setTokenInStorage, token, expiresIn, personId);

            yield put(A.refreshTokenSuccess(data));
         } else {
            yield put(A.logoutSuccess());
         }
      } catch (error) {
         yield call(resetTokenInStorage);
         yield put(A.loginFail(error));
      }
   }
}

export function* logoutWorker() {
   try {
      yield call(logoutUser);

      yield put(A.logoutSuccess())
   } catch (error) {
      yield put(A.logoutFail(error));
   }
}

export function* waitForAuthStatus() {
   let authStatus: LoggedStatus = yield select(loggedInStatusSelector);

   if (authStatus === LoggedStatus.Unknown) {
      yield take([
         AuthActionType.LoginSuccess,
         AuthActionType.LogoutSuccess,
         AuthActionType.LoginFail,
      ]);

      authStatus = yield select(loggedInStatusSelector);
   }

   return authStatus;
}
