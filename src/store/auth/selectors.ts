import { createSelector } from "reselect";
import { ApplicationState } from "../configuration/constants";
import { RoleType } from "../panelMenu/role/constants";
import { LoggedStatus, User } from "./constants";

export const userSelector = ({ auth }: ApplicationState): User => auth.user;

export const loggedInStatusSelector = ({ auth }: ApplicationState): LoggedStatus => auth.auth.loggedIn;
export const tokenExpiredInSelector = ({ auth }: ApplicationState): number => auth.auth.expiresIn;
export const userRoleSelector = ({ auth }: ApplicationState): RoleType | undefined => auth.user.role;

export const getPersonId = createSelector<ApplicationState, User, string | undefined>(
   userSelector,
   ({ personId }) => personId,
);

export const getIsDefaultPassword = createSelector<ApplicationState, User, boolean | undefined>(
   userSelector,
   ({ isDefaultPassword }) => isDefaultPassword,
);
