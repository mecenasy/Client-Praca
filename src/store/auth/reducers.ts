import { AuthAction, AuthActionType, AuthState, initialState } from "./constants";

export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
   switch (action.type) {
      case AuthActionType.LoginSuccess:
      case AuthActionType.RefreshTokenSuccess: {
         return action.user;
      }
      case AuthActionType.LoginFail:
      case AuthActionType.LogoutSuccess:
      case AuthActionType.LogoutFail: {
         return {
            loggedIn: false,
         }
      }
      default: {
         return state;
      }
   }
}
