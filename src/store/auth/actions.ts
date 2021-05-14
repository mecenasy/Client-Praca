import { AxiosError } from 'axios';
import { Auth, AuthAction, AuthActionType, User } from './constants';

export const loginRequest = (user: string, password: string): AuthAction => ({
   type: AuthActionType.LoginRequest,
   user,
   password,
});

export const loginSuccess = (user?: User, auth?: Auth, errorMessage?: Record<string, string>): AuthAction => ({
   type: AuthActionType.LoginSuccess,
   user,
   auth,
   errorMessage,
});

export const loginFail = (error: AxiosError): AuthAction => ({
   type: AuthActionType.LoginFail,
   error,
});

export const logoutRequest = (): AuthAction => ({
   type: AuthActionType.LogoutRequest,
});

export const logoutSuccess = (): AuthAction => ({
   type: AuthActionType.LogoutSuccess,
});

export const logoutFail = (error: AxiosError): AuthAction => ({
   type: AuthActionType.LogoutFail,
   error,
});

export const refreshTokenRequest = (): AuthAction => ({
   type: AuthActionType.RefreshTokenRequest,
});

export const refreshTokenSuccess = (auth: Auth): AuthAction => ({
   type: AuthActionType.RefreshTokenSuccess,
   auth,
});

export const refreshTokenFail = (error: AxiosError): AuthAction => ({
   type: AuthActionType.RefreshTokenFail,
   error,
});
