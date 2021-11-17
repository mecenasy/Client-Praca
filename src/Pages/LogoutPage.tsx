import React, { FC } from 'react';
import { actionCreator } from '../PageConfigs/logoutConfig'
import ActionsWrapper from './Actions/ActionsWrapper';
import Logout from '../modules/Pages/Logout/Logout';

const LogoutPage: FC = () => (
   <ActionsWrapper actionCreatorFactory={actionCreator}   >
      <Logout />
   </ActionsWrapper>
);

export default LogoutPage;
