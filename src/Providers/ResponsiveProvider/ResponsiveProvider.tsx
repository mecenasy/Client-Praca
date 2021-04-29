import React, { createContext, FC } from 'react';
import useMedia from 'use-media';
import { md, xs } from '../../styles/config';

export interface ResponsiveProps {
   isMobile?: boolean
   isTablet?: boolean
   isDesktop?: boolean

}
export const ResponsiveContext = createContext({
   isMobile: false,
   isTablet: false,
   isDesktop: true,
});

const ResponsiveProvider: FC<{ defaultState?: ResponsiveProps }> = ({ children, defaultState = {} }) => {
   const {
      isMobile: mobileDefault,
      isTablet: tabletDefault,
      isDesktop: desktopDefault,
   } = defaultState;

   const isMobile = useMedia({ maxWidth: xs }, mobileDefault);
   const isTablet = useMedia({ minWidth: xs, maxWidth: md }, tabletDefault);
   const isDesktop = useMedia({ minWidth: md }, desktopDefault);
   
   return (
      <ResponsiveContext.Provider value={{
         isMobile,
         isTablet,
         isDesktop,
      }}>
         { children}
      </ResponsiveContext.Provider >
   )
};

export default ResponsiveProvider;
