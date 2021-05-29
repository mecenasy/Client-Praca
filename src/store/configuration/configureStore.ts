import { createStore, compose, applyMiddleware, AnyAction, Store, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { ApplicationState, ConfigureStore } from "./constants";
import { onError } from './helpers';
import reduxPromiseListener from './reduxPromiseListener';
import { setAuthorizationProvider } from '~/src/api/api';

const configureStore: ConfigureStore = async (
   initialState,
   history,
   rootReducerFactory,
   rootSaga,
) => {
   const sagaMiddleware = createSagaMiddleware({ onError });

   const middlewares: Middleware[] = [
      sagaMiddleware,
      reduxPromiseListener.middleware,
   ];

   // connected router middleware
   middlewares.push(routerMiddleware(history));

   if (process.env.NODE_ENV !== 'production') {
      /* eslint @typescript-eslint/no-var-requires: "off" */
      const { default: reduxImmutable } = await import('redux-immutable-state-invariant');

      middlewares.unshift(reduxImmutable());
   }

   // If devTools is installed, connect to it
   const windowIfDefined: Window | null = typeof window === 'undefined' ? null : window;
   const composeEnhancers = (windowIfDefined?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

   const composedMiddlewares = composeEnhancers(
      applyMiddleware(...middlewares),
   );


   const store: Store<ApplicationState, AnyAction> = createStore(
      rootReducerFactory(history),
      initialState,
      composedMiddlewares,
   );

   if (!SERVER_BUILD) {
      setAuthorizationProvider(() => store.getState().auth.auth.token)
   }
   const rootSagaTask = rootSaga && sagaMiddleware.run(rootSaga);

   return { store, rootSagaTask };
};

export { configureStore };
