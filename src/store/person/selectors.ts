import { ApplicationState } from "../configuration/constants";
import { Person } from "./constants";

export const getPerson = (state: ApplicationState): Person => state.person;