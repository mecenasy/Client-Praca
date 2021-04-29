import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { AnyAction, Store } from 'redux';
import { ApplicationState } from '../store/configuration/constants';
import { GlobalStyles } from './GlobalStyles';
import ResponsiveProvider, { ResponsiveProps } from './ResponsiveProvider/ResponsiveProvider';
import Router, { RouterProps } from './Router/Router';
import ServerProvider from './ServerProvider/ServerProvider';
interface AppProviderProps extends RouterProps {
   store: Store<ApplicationState, AnyAction>
   defaultResponsive?: ResponsiveProps
}

const AppProvider: FC<AppProviderProps> = ({
   store,
   url,
   history,
   routerContext,
   defaultResponsive,
   children,
}) => (
   <ServerProvider>
      <Provider store={store}>
         <ResponsiveProvider defaultState={defaultResponsive}>
            <Router
               url={url}
               history={history}
               routerContext={routerContext}
            >
               <GlobalStyles />
               {children}
            </Router>
         </ResponsiveProvider>
      </Provider>
   </ServerProvider>
);

export default AppProvider;
