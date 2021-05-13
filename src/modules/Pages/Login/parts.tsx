import styled from 'styled-components';
import BoxWithShadowBase from '../../Components/Box/Box';

export const BoxWithShadow = styled(BoxWithShadowBase)`
  margin: 200px auto;
  height: auto;
  width: 640px;
  padding: 32px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`

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
`;

export const WrapperAlert = styled.div`
  height: 50px;
  width: 100%;
  margin: 4px 0 12px;
`;

export const ValidationAlert = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2px;
`;

export const Error = styled.span`
  color: red;
  text-align: center;
  font-size: 14px
`;
