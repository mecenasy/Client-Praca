import { call, put, takeLatest } from 'redux-saga/effects';
import { getRole } from '~/src/api/panelMenu/requests';
import { getRoleSuccess, getRoleFail } from './actions';
import { RoleAction, Role, RoleActionType } from './constants';
import { LoggedStatus } from '../../auth/constants';
import { waitForAuthStatus } from '../../auth/sagas';

export function* getRoleWatcher() {
   yield takeLatest<RoleAction>(RoleActionType.GetRoleRequest, getRoleWorker);
}

export function* getRoleWorker() {
   const authStatus: LoggedStatus = yield call(waitForAuthStatus);

   if (authStatus === LoggedStatus.LoggedIn) {
      try {
         const { data }: { data: Role[] } = yield call(getRole);

         yield put(getRoleSuccess(data));
      } catch (error) {
         yield put(getRoleFail(''));
      }
   }
}

