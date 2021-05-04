import styled from 'styled-components';
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

export const Overlay = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: white;
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

export const MenuBurgerWrapper = styled.div`
   position: absolute;
   top: 54px;
`;

export const MenuBurgerInnerWrapper = styled.div`
   width: 300px;
   background: white;
`;

export const Text = styled.span``;