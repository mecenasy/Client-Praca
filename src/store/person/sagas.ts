import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getPersonByUserId } from '../../api/person/requests';
import { getPersonSuccess, getPersonFail } from './actions';
import { PersonAction, Person, PersonActionType } from './constants';
import { getPersonId } from '../auth/selectors';
import { LoggedStatus } from '../auth/constants';
import { waitForAuthStatus } from '../auth/sagas';

export function* getPersonWatcher() {
   yield takeLatest<PersonAction>(PersonActionType.GetPersonRequest, getPersonWorker);
}

export function* getPersonWorker() {
   const authStatus: LoggedStatus = yield call(waitForAuthStatus);

   if (authStatus === LoggedStatus.LoggedIn) {

      const personId: string = yield select(getPersonId);
      try {
         if (personId) {

            const { data }: { data: Person } = yield call(getPersonByUserId, personId);

            yield put(getPersonSuccess(personId, data));
         }
      } catch (error) {
         yield put(getPersonFail(personId, ''));
      }
   }
}

