export enum Direction {
   Informatics = 'Informatyka',
   Management = 'Zarządzanie',
   None = '',
}

export enum Specialty {
   Programming = 'Programowanie',
   Networks = 'Sieci',
   None = '',
}

export interface Person {
   id: string;
   album: number;
   direction: Direction;
   specialty: Specialty;
   year: string;
   semester: string;
   group: string;
   name: string;
   surname: string;
   email: string;
   phone: number;
   photo?: string;
   address?: Address;
}

export interface Address {
   street: string;
   city: string;
   country: string;
   number: string;
   zipCode: string;
}

export enum PersonActionType {
   GetPersonRequest = 'person/GET_PERSON_REQUEST',
   GetPersonSuccess = 'person/GET_PERSON_SUCCESS',
   GetPersonFail = 'person/GET_PERSON_FAIL',
}

export type PersonAction = {
   type: PersonActionType.GetPersonRequest;
} | {
   userId: string;
   type: PersonActionType.GetPersonSuccess;
   person: Person;
} | {
   userId: string;
   type: PersonActionType.GetPersonFail;
   message: string,
};

export const initialState: Person = {
   id: '',
   album: 0,
   direction: Direction.None,
   specialty: Specialty.None,
   year: '',
   semester: '',
   group: '',
   name: '',
   surname: '',
   phone: 0,
   email: '',
   photo: '',
};
