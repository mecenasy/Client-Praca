import { AxiosError } from 'axios';

export enum AuthActionType {
   LoginRequest = 'auth/LOGIN_REQUEST',
   LoginSuccess = 'auth/LOGIN_SUCCESS',
   LoginFail = 'auth/LOGIN_FAIL',
   LogoutRequest = 'auth/LOGOUT_REQUEST',
   LogoutSuccess = 'auth/LOGOUT_SUCCESS',
   LogoutFail = 'auth/LOGOUT_FAIL',
   RefreshTokenRequest = 'auth/REFRESH_TOKEN_REQUEST',
   RefreshTokenSuccess = 'auth/REFRESH_TOKEN_SUCCESS',
   RefreshTokenFail = 'auth/REFRESH_TOKEN_FAIL',
}

export enum Role {
   Student = 'student',
   Teacher = 'teacher',
   Admin = 'admin',
}

export interface User {
   loggedIn: boolean;
   name?: string;
   personId?: string;
   role?: Role;
   token?: string;
}

export type AuthAction = {
   type: AuthActionType.LoginRequest;
   user: string;
   password: string;
} | {
   type: AuthActionType.LoginSuccess;
   user: User;
} | {
   type: AuthActionType.LoginFail;
   error: AxiosError;
} | {
   type: AuthActionType.LogoutRequest;
} | {
   type: AuthActionType.LogoutSuccess;
   user: User;
} | {
   type: AuthActionType.LogoutFail
   error: AxiosError;
} | {
   type: AuthActionType.RefreshTokenRequest;
} | {
   type: AuthActionType.RefreshTokenSuccess;
   user: User;
} | {
   type: AuthActionType.RefreshTokenFail
   error: AxiosError;
}

export type AuthState = User;

export const initialState: AuthState = {
   loggedIn: false,
}