import React, { FC } from 'react';
import { actionCreator } from '../PageConfigs/loginConfig'
import ActionsWrapper from './Actions/ActionsWrapper';
import Login from '../modules/Pages/Login/Login';

const LoginPage: FC = () => (
   <ActionsWrapper actionCreatorFactory={actionCreator}   >
      <Login />
   </ActionsWrapper>
);

export default LoginPage;
