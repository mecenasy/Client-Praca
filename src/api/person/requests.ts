import api from '../api';
import { personWithId } from './paths';

export const getPersonByUserId = async (userId: string) => {
   return await api.get(personWithId(userId));
};
