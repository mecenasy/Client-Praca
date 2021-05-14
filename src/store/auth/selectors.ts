import { createSelector } from "reselect";
import { ApplicationState } from "../configuration/constants";
import { LoggedStatus, User } from "./constants";

export const userSelector = ({ auth }: ApplicationState): User => auth.user;

export const loggedInStatusSelector = ({ auth }: ApplicationState): LoggedStatus => auth.auth.loggedIn;

export const getPersonId = createSelector<ApplicationState, User, string | undefined>(
   userSelector,
   ({ personId }) => personId,
)
