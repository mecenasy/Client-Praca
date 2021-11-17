import { fork, all } from "@redux-saga/core/effects";
import { authWatcher } from "../auth/sagas";
import { counterWatcher } from "../counter/sagas";
import { getMenuWatcher } from "../menu/sagas";
import { getPersonWatcher } from "../person/sagas";
import { getRoleWatcher } from "../panelMenu/role/sagas";
import { menuItemsWatcher } from "../panelMenu/menu/sagas";

export function* rootSaga() {
   yield all([
      fork(authWatcher),
      fork(counterWatcher),
      fork(getMenuWatcher),
      fork(getPersonWatcher),
      fork(getRoleWatcher),
      fork(menuItemsWatcher),
   ]);
}
