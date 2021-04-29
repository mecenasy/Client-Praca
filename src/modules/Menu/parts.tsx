import styled, { css } from 'styled-components';
import { Link as LinkBase } from "react-router-dom";

export const Link = styled(LinkBase)`
   text-decoration: none;
   color: black;

   &:active, :visited, :hover {
      color: black;
   }
`;

export const Image = styled.img`
   margin: 0 16px;
   width: 20px;
   height: 20px;
`;

export const Wrapper = styled.div<{ show: boolean }>`
   position:static;
   top: 0;
   display: flex;
   justify-content: space-between;
   width: 100%;
   background-color: #74aae0;
   box-shadow: 0 0 3px 1px #465b65;
   opacity: 0;
   transform: translateY(-100%);
   transition: all 300ms ease-in-out;
   position: relative;
   z-index: 2;

   ${({ show }) => show && css`
      opacity: 1;
      transform: translateY(0);
   `}
`;

export const MenuWrapper = styled.div`
   display: flex;
   justify-content: flex-start;
   width: 100%;
`;

export const UserWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   width: 100%;
`;

export const MenuBurgerOverlay = styled.div`
   position: absolute;
   top:0;
   bottom:0;
   left:0;
   right:0;
   background-color: white;
   opacity: 0.3;
`;

export const MenuBurgerItem = styled.div`
   height: 56px;
   border-bottom: 1px solid grey;
   width: 100%;
   display: flex;
   align-items: center;

   &:active, :visited, :hover {
      background-color: #f1efef;
   }
`;

export const MenuBurgerInnerWrapper = styled.div`
   width: 300px;
   background: white;
`;

export const Text = styled.span``;