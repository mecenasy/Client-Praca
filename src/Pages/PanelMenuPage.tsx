import React, { FC } from 'react';
import { actionCreator } from '../PageConfigs/loginConfig'
import ActionsWrapper from './Actions/ActionsWrapper';
import PanelMenu from '../modules/Pages/PanelMenu/PanelMenu';

const ChangePasswordPage: FC = ({

}) => (
   <ActionsWrapper
      actionCreatorFactory={actionCreator}
   >
      <PanelMenu />
   </ActionsWrapper>
);

export default ChangePasswordPage;
