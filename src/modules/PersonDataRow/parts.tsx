import styled from 'styled-components';
import { media } from '../../styles/media'
export const DataRow = styled.div`
   display: flex;
   align-items: flex-start;
   padding-bottom: 2px;
   font-size: 10px;
   margin-left: 16px;

   ${media.greaterThan('xs')`
      padding-bottom: 4px;
      font-size: 14px;
      margin-left: 24px;
   `}
`;

export const TitleRow = styled.div`
   width: 100px;
   font-weight: 600;
   
   ${media.greaterThan('xs')`
      width: 150px;
   `}
`;

export const TitleData = styled.div`
   font-weight: 500;
`;
