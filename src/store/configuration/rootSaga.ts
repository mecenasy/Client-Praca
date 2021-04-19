import { fork, all } from "@redux-saga/core/effects";
import { counterWatcher } from "../counter/sagas";
import { getMenuWatcher } from "../menu/sagas";
import { getPersonWatcher } from "../person/sagas";

export function* rootSaga() {
   yield all([
      fork(counterWatcher),
      fork(getMenuWatcher),
      fork(getPersonWatcher),
   ]);
}
