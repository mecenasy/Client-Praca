import { expiresInKey, tokenKey, personIdKey, AuthStorage } from "./constants";


export const setTokenInStorage = (token: string, expiresIn: number, personId: string) => {
   localStorage.setItem(tokenKey, token);
   localStorage.setItem(expiresInKey, expiresIn.toString());
   localStorage.setItem(personIdKey, personId);
};

export const resetTokenInStorage = () => {
   localStorage.removeItem(tokenKey);
   localStorage.removeItem(expiresInKey);
   localStorage.removeItem(personIdKey);
};

export const getTokenInStorage = (): AuthStorage => ({
   token: localStorage[tokenKey],
   expiresIn: +localStorage[expiresInKey],
   personId: localStorage[personIdKey],
});