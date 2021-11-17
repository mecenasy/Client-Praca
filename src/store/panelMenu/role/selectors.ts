
import { createSelector } from "reselect";
import { Option } from "~/src/modules/Components/Input/types";
import { ApplicationState } from "../../configuration/constants";
import { Role, RoleType } from "./constants";

export const getRoles = (state: ApplicationState): Role[] => state.panelMenu.role;

export const rolesOptions = (roles: Role[]) => {
   return roles.map(({ role }): Option<RoleType> => roleOption(role));
}

export const roleOption = (role: RoleType) => {
   switch (role) {
      case RoleType.Admin: {
         return ({
            value: role,
            label: 'Administrator'
         });
      }
      case RoleType.Student: {
         return ({
            value: role,
            label: 'Student'
         });
      }
      default:
         return ({
            value: role,
            label: 'Wykładowca'
         });
   }
}

export const roleSelector = createSelector<ApplicationState, Role[], Option<RoleType>[]>(
   getRoles,
   rolesOptions,
)