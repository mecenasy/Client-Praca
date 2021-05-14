import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router';
import { LoggedStatus } from '../../store/auth/constants';
import { loggedInStatusSelector } from '../../store/auth/selectors';

const Auth: FC = () => {
   const isLoggedIn = useSelector(loggedInStatusSelector);
   const location = useLocation();
   const loginPath = '/login';

   if (isLoggedIn === LoggedStatus.LoggedIn
      || isLoggedIn === LoggedStatus.Unknown
      || location.pathname === loginPath) {
      return null;
   }

   return <Redirect to={loginPath} />;
};

export default Auth;
