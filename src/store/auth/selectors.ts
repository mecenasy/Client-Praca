import { createSelector } from "reselect";
import { ApplicationState } from "../configuration/constants";
import { User } from "./constants";

export const userSelector = ({ auth }: ApplicationState): User => auth;

export const getPersonId = createSelector<ApplicationState, User, string | undefined>(
   userSelector,
   ({ personId }) => personId,
)
