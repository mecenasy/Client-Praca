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
   name: string;
   personId: string;
   role?: Role;
   isDefaultPassword?: boolean;
}

export interface Auth {
   loggedIn: LoggedStatus;
   token: string;
   expiresIn: number;
}

export type AuthAction = {
   type: AuthActionType.LoginRequest;
   user: string;
   password: string;
} | {
   type: AuthActionType.LoginSuccess;
   user?: User;
   auth?: Auth;
   errorMessage?: Record<string, string>;
} | {
   type: AuthActionType.LoginFail;
   error: AxiosError;
} | {
   type: AuthActionType.LogoutRequest;
} | {
   type: AuthActionType.LogoutSuccess;
} | {
   type: AuthActionType.LogoutFail
   error: AxiosError;
} | {
   type: AuthActionType.RefreshTokenRequest;
} | {
   type: AuthActionType.RefreshTokenSuccess;
   auth: Auth
} | {
   type: AuthActionType.RefreshTokenFail
   error: AxiosError;
}

export interface AuthState {
   auth: Auth;
   user: User;
}

export enum LoggedStatus {
   LoggedIn = 'LoggedIn',
   LoggedOut = 'LoggedOut',
   Unknown = 'Unknown',
}

export const userInitialState: User = {
   name: '',
   personId: '',
};

export const authInitialState: Auth = {
   loggedIn: LoggedStatus.Unknown,
   expiresIn: 0,
   token: '',
};

export interface LoginData {
   user: string;
   password: string;
   error?: Record<string, string>;
}

export interface AuthStorage {
   token: string;
   expiresIn: number;
   personId: string;
}

export const tokenKey = 'token';
export const expiresInKey = 'expiresIn';
export const personIdKey = 'personId';
