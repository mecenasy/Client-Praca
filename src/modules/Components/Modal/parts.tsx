import styled from 'styled-components';
import PhotoBase from "../../Photo/Photo";
import { Border } from "../../Photo/parts";


export const Title = styled.h2`
   margin: 0;
   font-size: 20px;
   line-height: 20px;
`;

export const TitleWrapper = styled.div`
   border-bottom: 1px solid grey;
   margin: 0 -20px;
   padding: 4px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 16px;
`;

export const CLoseIcon = styled(PhotoBase)`
   width: 16px;
   height: 16px;
`;

export const Button = styled.button`
   border: none;
   background-color: unset;
   padding: 0;

   ${Border} {
      padding: 4px;
   }
`;
