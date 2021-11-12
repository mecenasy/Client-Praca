import React from 'react';
import * as P from './parts';
import { ToggleProps } from './types'

const Toggle = ({ input: { onChange, checked, ...rest }, label, leftText, rightText, ...restProps }: ToggleProps) => (
   <P.DropdownWrapper>
      <P.Global />
      <P.Label>{label}</P.Label>
      <P.ToggleWrapper>
         {leftText && <P.TextLeft>{leftText}</P.TextLeft>}
         <P.Toggle
            checked={checked}
            onChange={onChange}
            {...rest}
            {...restProps}
            type="checkbox"
         />
         {rightText && <P.TextRight>{rightText}</P.TextRight>}
      </P.ToggleWrapper>
   </P.DropdownWrapper>
);

export default Toggle;
