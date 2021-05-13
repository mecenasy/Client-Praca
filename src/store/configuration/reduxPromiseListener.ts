import createReduxPromiseListener from 'redux-promise-listener';

const reduxPromiseListener = createReduxPromiseListener();

export const promiseListener = reduxPromiseListener;

export default reduxPromiseListener;
