import axios from 'axios';
import { basePath, authorizationHeaders } from './apiConfig';

const axiosInstance = axios.create({
   responseType: 'json',
   baseURL: basePath,
   headers: authorizationHeaders,
});

let headerProvider: () => string | undefined;

axiosInstance.defaults.withCredentials = true;

if (SERVER_BUILD) {
   axiosInstance.interceptors.request.use(
      (request) => {
         if (headerProvider) {
            const cookies = headerProvider();

            if (cookies) {
               request.headers.cookie = cookies;
            }
         }
         return request;
      },
   );
}

export const setHederProvider = (provider: () => string | undefined) => {
   headerProvider = provider;
};

export default axiosInstance;
