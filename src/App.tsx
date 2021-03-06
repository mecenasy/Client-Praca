import React, { FC } from "react";
import { Route, Switch, useLocation } from "react-router";
import { menuConfig } from "./PageConfigs/menuConfig";
import { configs } from './PageConfigs/routesConfigs';
import { useTransition, animated } from 'react-spring';
import { AppContainer } from "./modules/Components/Containers/AppContainer/parts";
import ExcludePaths from "./Pages/ExtrudePaths/ExtrudePaths";
import Auth from "./Pages/Auth/Auth";

export const App: FC = () => {
   const location = useLocation();

   const transitions = useTransition(
      location,
      ({ pathname }) => pathname,
      {
         initial: { opacity: 1, transform: "translate(0%, 0)" },
         from: { opacity: 0, transform: "translate(100%, 0)" },
         enter: { opacity: 1, transform: "translate(0%, 0)" },
         leave: { opacity: 0, transform: "translate(-100%, 0)" }
      });

   return (
      <AppContainer>
         <ExcludePaths paths={menuConfig.extrudeUrl}         >
            <Route path={menuConfig.url} component={menuConfig.Component} />
         </ExcludePaths>
         <Route path={'/'} component={Auth} />

         {transitions.map(({ item: location, props, key }) => (
            <animated.div style={props} key={key}>
               <Switch location={location}>
                  {configs.map(({ Component, url, exact = false }) => (
                     <Route key={url} exact={exact} path={url} component={Component} />
                  ))}
               </Switch>
            </animated.div>
         ))}
      </AppContainer>
   )
};

export default App;
