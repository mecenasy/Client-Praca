import axios from 'axios';
import { basePath, authorizationHeaders } from './apiConfig';

const axiosInstance = axios.create({
   responseType: 'json',
   baseURL: basePath,
   headers: authorizationHeaders,
});

let cookieProvider: () => string | undefined;

axiosInstance.defaults.withCredentials = true;

if (SERVER_BUILD) {
   axiosInstance.interceptors.request.use(
      (request) => {
         if (cookieProvider) {
            const cookies = cookieProvider();

            if (cookies) {
               request.headers.cookie = cookies;
            }
         }
         return request;
      },
   );
}

axiosInstance.interceptors.request.use(
   (request) => {
      const authorizationToken = request.headers.cookie['jwt'];

      if (authorizationToken) {
         request.headers.Authorization = 'Bearer ' + authorizationToken;
      }
      return request;
   },
);

export const setCookieProvider = (provider: () => string | undefined) => {
   cookieProvider = provider;
};

export default axiosInstance;
