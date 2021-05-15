import styled from 'styled-components';
import { media } from '~/src/styles/media';
import BoxWithShadowBase from '../../Components/Box/Box';
import AlertBase from '../../Components/Alert/Alert';

export const Alert = styled(AlertBase)`
   margin-bottom: 16px;
`;

export const BoxWithShadow = styled(BoxWithShadowBase)`
  padding: 16px;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('xs')`
      padding: 32px;
  `}
`;

export const Title = styled.h1`
   text-align: center;
`;

export const SubTitle = styled.h4`
  text-align: center;
`;

export const SubmitButton = styled.button`
   background-color: #b3d7ffab;
   cursor: pointer;
   width: 100%;
   border: none;
   height: 36px;
   border-radius: 4px;
   cursor: pointer;
   box-shadow: 1px 1px 4px 0px #6f8cab;
   margin-bottom: 8px;
   border: 1px solid #6f8cab;

   :active {
      box-shadow: -1px -1px 4px 0px #6f8cab;
   }
`;

export const WrapperAlert = styled.div`
  height: 50px;
  width: 100%;
  margin: 4px 0 12px;
`;

export const ValidationAlert = styled.div`
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2px;
`;

export const Error = styled.span`
  color: red;
  text-align: center;
  font-size: 14px;
`;

export const Wrapper = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;
`;