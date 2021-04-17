const protocol = API_HOST_PROTOCOL || 'http';
const host = API_HOST_URL || 'localhost';
const port = +API_HOST_PORT;
const path = '';
const basePath = `${protocol}://${host}${port ? `:${port}` : ''}`;

const authorizationHeaders = {
   'Content-Type': 'application/json',
};

export { basePath, authorizationHeaders };
