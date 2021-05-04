import React, { FC, useCallback, useState, useEffect, useRef } from 'react';
import { createPortal } from "react-dom";
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import getOrCreateReactPortalsDiv from '../../../../utils/portalContainer';
import { getMenuSelector } from '../../../store/menu/selectors';
import * as P from './parts';


interface BurgerMenuProps {
   onCloseMenu: () => void
   onCloseMenuCallback: (callBack: () => void) => void
}

export const BurgerMenu: FC<BurgerMenuProps> = ({
   onCloseMenu,
   onCloseMenuCallback,
}: any) => {
   const parent = getOrCreateReactPortalsDiv();

   const { leftSide } = useSelector(getMenuSelector);
   const [opening, setOpening] = useState(false);
   const renderedRef = useRef(0);

   const onRest = useCallback(() => {
      if (renderedRef.current > 1) {
         onCloseMenu()
      } else {
         renderedRef.current = ++renderedRef.current
      }
   }, [onCloseMenu]);

   const props = useSpring({
      config: {
         duration: 200
      },
      onRest,
      from: { width: "0px" },
      to: { width: opening ? "300px" : "0px" }
   });

   useEffect(() => {
      if (renderedRef.current === 1) {
         onCloseMenuCallback(() => { onClickBurger() })

         setOpening(true);
      }
   }, [onCloseMenuCallback]);

   const onClickBurger = () => { setOpening(false); }

   return createPortal((
      <>
         <P.Overlay onClick={onClickBurger} />
         <P.MenuBurgerWrapper>
            <animated.div style={{ ...props, overflow: "hidden" }}>
               <P.MenuBurgerInnerWrapper>
                  {leftSide.map((item) => (
                     <P.Link to={item.link} key={item.link} onClick={onClickBurger}>
                        <P.MenuBurgerItem>
                           <P.Image src={item.image} />
                           <P.Text>{item.name}</P.Text>
                        </P.MenuBurgerItem>
                     </P.Link>
                  ))}
               </P.MenuBurgerInnerWrapper>
            </animated.div>
         </P.MenuBurgerWrapper>
      </>
   ), parent);
};