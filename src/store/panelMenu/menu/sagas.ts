import { call, put, takeLatest } from 'redux-saga/effects';
import { addMenuItem, getMenu, removeMenuItem } from '~/src/api/panelMenu/requests';
import { LoggedStatus } from '../../auth/constants';
import { waitForAuthStatus } from '../../auth/sagas';
import { getMenuItemsSuccess, getMenuItemsFail, setMenuItemsSuccess, removeMenuItemsSuccess, removeMenuItemsFail, setMenuItemsFail } from './actions';
import { MenuItemActionType, MenuItemAction } from './constants';

export function* menuItemsWatcher() {
   yield takeLatest(MenuItemActionType.GetMenuItemsRequest, getMenuWorker);
   yield takeLatest(MenuItemActionType.SetMenuItemsRequest, setMenuWorker);
   yield takeLatest(MenuItemActionType.RemoveMenuItemsRequest, removeMenuWorker);
}

export function* getMenuWorker() {
   const authStatus: LoggedStatus = yield call(waitForAuthStatus);

   if (authStatus === LoggedStatus.LoggedIn) {
      try {
         const { data } = yield call(getMenu);

         yield put(getMenuItemsSuccess(data));

      } catch (error) {
         yield put(getMenuItemsFail(error));
      }
   }
}

export function* setMenuWorker(action: MenuItemAction) {
   if (action.type === MenuItemActionType.SetMenuItemsRequest) {
      try {
         const { data } = yield call(addMenuItem, action.item);
         console.log("🚀 ~ file: sagas.ts ~ line 33 ~ function*setMenuWorker ~ data", data)

         yield put(setMenuItemsSuccess());

      } catch (error) {
         yield put(setMenuItemsFail(error));
      }
   }

}

export function* removeMenuWorker(action: MenuItemAction) {
   if (action.type === MenuItemActionType.RemoveMenuItemsRequest) {
      try {
         const { data } = yield call(removeMenuItem, action.id);
         console.log("🚀 ~ file: sagas.ts ~ line 33 ~ function*setMenuWorker ~ data", data)

         yield put(removeMenuItemsSuccess());

      } catch (error) {
         yield put(removeMenuItemsFail(error));
      }
   }

}
