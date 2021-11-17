import styled from 'styled-components';
import PhotoBase from "../../Photo/Photo";
import BoxBase from '../../Components/Box/Box'

export const MenuPanelWrapper = styled.div`
   font-size: 12px;
   line-height: 16px;
`;

export const Photo = styled(PhotoBase)`
   width: 30px;
   height: 30px;
`;

export const Pen = styled(PhotoBase)`
   width: 16px;
   height: 16px;
`;

export const Box = styled(BoxBase)`
   align-items: start;
`;

export const BoxColumn = styled.div<{ columWidth: number, direction?: 'row' | 'column' }>`
   margin-right: 16px;
   display: flex;
   ${({ direction }) => direction && ` flex-direction: ${direction}`};
   width: ${({ columWidth }) => columWidth}px;
   &:last-child {
      margin: 0;
   }
`;

export const BoxInnerColumn = styled.div`
   margin-right: 16px;

   &:last-child {
      margin: 0;
   }
`;

export const AddItemText = styled.span`
   position: absolute;
   top: 8px;
   left: 34px;
`;

export const Button = styled.button`
   margin-bottom: 12px;
   padding: 0;
   background: none;
   border: none;

   &:last-child {
      margin-bottom: 0;
   }
   
   &:hover{
      div {
         background-color: #e9eef8;
      }
   }
   
   &:active {
      div {
         background-color: #b9babd;
         top: 1px;
         left: 1px;
        
      }
   }
`;

export const AddItemButton = styled(Button)`
   position:relative;
   margin: 12px 12px 0;
   width: calc(100% - 24px);
`;

export const SortButtonWrapper = styled.div`
   display: flex;
`;

export const SortButton = styled(Button)`
   box-shadow: 0 0 6px 0 #74aae0;
   position: relative;
   height: 100%;
   border: 1px solid gray;
   border-radius: 6px;
   background: white;
   padding: 6px;
   position:relative;
   margin: 12px 12px 0;
   width: calc(100% - 24px);
`;

