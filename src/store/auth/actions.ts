import { AxiosError } from 'axios';
import { AuthAction, AuthActionType, User } from './constants';

export const loginRequest = (user: string, password: string): AuthAction => ({
   type: AuthActionType.LoginRequest,
   user,
   password,
});

export const loginSuccess = (user: User): AuthAction => ({
   type: AuthActionType.LoginSuccess,
   user,
});

export const loginFail = (error: AxiosError): AuthAction => ({
   type: AuthActionType.LoginFail,
   error,
});

export const logoutRequest = (): AuthAction => ({
   type: AuthActionType.LogoutRequest,
});

export const logoutSuccess = (user: User): AuthAction => ({
   type: AuthActionType.LogoutSuccess,
   user,
});

export const logoutFail = (error: AxiosError): AuthAction => ({
   type: AuthActionType.LogoutFail,
   error,
});

export const refreshTokenRequest = (): AuthAction => ({
   type: AuthActionType.RefreshTokenRequest,
});

export const refreshTokenSuccess = (user: User): AuthAction => ({
   type: AuthActionType.RefreshTokenSuccess,
   user,
});

export const refreshTokenFail = (error: AxiosError): AuthAction => ({
   type: AuthActionType.RefreshTokenFail,
   error,
});
