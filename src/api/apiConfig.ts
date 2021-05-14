const protocol = API_HOST_PROTOCOL || 'http';
const host = API_HOST_URL || 'localhost';
const port = +API_HOST_PORT;
const basePath = `${protocol}://${host}${port ? `:${port}` : ''}`;

const authorizationHeaders = {
   'Content-Type': 'application/json',
   'Access-Control-Allow-Credentials': true,
};

export { basePath, authorizationHeaders };
