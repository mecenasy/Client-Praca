import { User } from '~/src/store/auth/constants';
import api from '../api';
import { login, logout, refreshToken } from './paths';

export const logoutUser = async () => {
   return await api.get(logout);
};

export const loginUser = async (user: string, password: string) => {
   return await api.post(login, { user, password });
};

export const refreshUserToken = async () => {
   return await api.get<User>(refreshToken);
};
