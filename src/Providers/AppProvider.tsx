import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { AnyAction, Store } from 'redux';
import { ApplicationState } from '../store/configuration/constants';
import { GlobalStyles } from './GlobalStyles';
import Router, { RouterProps } from './Router/Router';
import ServerProvider from './ServerProvider/ServerProvider';
import { setConfiguration } from 'react-grid-system';
import { breakpoints } from '../styles/config';
interface AppProviderProps extends RouterProps {
   store: Store<ApplicationState, AnyAction>
}

const AppProvider: FC<AppProviderProps> = ({
   store,
   url,
   history,
   routerContext,
   children,
}) => {
   setConfiguration({
      breakpoints
   });

   return (
         <ServerProvider>
            <Provider store={store}>
               <Router
                  url={url}
                  history={history}
                  routerContext={routerContext}
               >
                  <GlobalStyles />
                  {children}
               </Router>
            </Provider>
         </ServerProvider>
   )
};

export default AppProvider;
