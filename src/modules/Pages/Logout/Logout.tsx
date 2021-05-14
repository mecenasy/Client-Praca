import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { LoggedStatus } from '~/src/store/auth/constants';
import { loggedInStatusSelector } from '~/src/store/auth/selectors';

const Logout: FC = () => {
   const isLoggedIn = useSelector(loggedInStatusSelector);

   if (isLoggedIn === LoggedStatus.LoggedIn) {
      return null;
   }

   return <Redirect to='/login' />
};

export default Logout;
