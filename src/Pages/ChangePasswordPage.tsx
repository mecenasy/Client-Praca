import React, { FC } from 'react';
import { actionCreator } from '../PageConfigs/loginConfig'
import ActionsWrapper from './Actions/ActionsWrapper';
import ChangePassword from '../modules/Pages/ChangePassword/ChangePassword';

const ChangePasswordPage:FC = ({
   
   }) => (
   <ActionsWrapper
      actionCreatorFactory={actionCreator}
   >
      <ChangePassword />
   </ActionsWrapper>
);

export default ChangePasswordPage;
