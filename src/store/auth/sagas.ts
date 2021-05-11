import { LOCATION_CHANGE } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginUser, logoutUser, refreshUserToken } from '../../api/auth/requests';
import * as A from './actions';
import { AuthAction, AuthActionType, User } from './constants';


export function* authWatcher() {
   yield takeLatest(AuthActionType.LoginRequest, loginWorker);
   yield takeLatest(AuthActionType.LogoutRequest, logoutWorker);
   yield takeLatest(LOCATION_CHANGE, refreshTokenWorker);
}

export function* loginWorker(action: AuthAction) {
   if (action.type === AuthActionType.LoginRequest) {

      try {
         const { data }: { data: User } = yield call(loginUser, action.user, action.password);

         yield put(A.loginSuccess(data))
      } catch (error) {
         yield put(A.loginFail(error));
      }
   }
}

export function* refreshTokenWorker() {
      try {
         const { data }: { data: User } = yield call(refreshUserToken);

         yield put(A.loginSuccess(data))
      } catch (error) {
         yield put(A.loginFail(error));
      }
   }

export function* logoutWorker() {
      try {
         const { data }: { data: User } = yield call(logoutUser);

         yield put(A.logoutSuccess(data))
      } catch (error) {
         yield put(A.logoutFail(error));
      }
   
}
