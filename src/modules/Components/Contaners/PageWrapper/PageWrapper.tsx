import React, { FC } from 'react';
import * as P from './parts';

interface PageWrapperProps {
   pickUp?: boolean;
}

const PageWrapper: FC<PageWrapperProps> = ({
   children,
   pickUp = false,
}) => (
   <P.Wrapper pickUp={pickUp}>
      <P.InnerWrapper>
         {children}
      </P.InnerWrapper>
   </P.Wrapper>
);

export default PageWrapper;
