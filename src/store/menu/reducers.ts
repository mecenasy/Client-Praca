import { AuthAction, AuthActionType } from "../auth/constants";
import { initialState, MenuAction, MenuActionType, MenuState } from "./constants";

export const menuReducer = (state: MenuState = initialState, action: MenuAction | AuthAction): MenuState => {
   switch (action.type) {
      case MenuActionType.GetMenuSuccess: {
         return action.menu;
      }
      case AuthActionType.LogoutSuccess: {
         return initialState
      }
      default: {
         return state;
      }
   }
}
