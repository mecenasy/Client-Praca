import React, { FC, useCallback, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import { ResponsiveContext } from '../../Providers/ResponsiveProvider/ResponsiveProvider';
import { getMenuSelector } from '../../store/menu/selectors';
import MenuItem from '../MenuItem/MenuItem';
import * as P from './parts';
import burger from '../../../assets/menu.svg';
import { MenuSide } from '../../store/menu/constants';

const Menu: FC = () => {
   const [showCounter, setCounter] = useState(0);
   const [showMenu, setShowMenu] = useState(false);
   const { pathname } = useLocation();
   const { leftSide, rightSide } = useSelector(getMenuSelector);
   const { isMobile } = useContext(ResponsiveContext);

   const onClickBurger = useCallback(() => {
      setShowMenu((show) => !show);
   }, []);

   const onClick = useCallback(() => {
      setCounter((count) => ++count);
   }, []);

   const isMenuShow = !(pathname === '/' || pathname === '/login');

   const props = useSpring({
      width: showMenu ? 300 : 0,
      overflow: 'hidden',
      config: { duration: 200 },
      position: 'absolute',
   });

   return (
      <>
         <P.Wrapper show={isMenuShow} >
            <P.MenuWrapper onClick={onClick}>
               {isMobile
                  ? (
                     <MenuItem
                        isSmall
                        asButton
                        name={''}
                        menuSide={MenuSide.Left}
                        position={0}
                        link={''}
                        onClick={onClickBurger}
                        image={burger}
                     />)
                  : leftSide.map((item) => (
                     <MenuItem
                        forceShow={item.link === '/' || !(item.hidden && showCounter < 5)}
                        isSmall
                        key={item.link}
                        {...item}
                     />
                  ))}
            </P.MenuWrapper>
            <P.UserWrapper >
               {rightSide.map((item) => (
                  <MenuItem
                     forceShow
                     isSmall
                     key={item.link}
                     {...item}
                  />
               ))}
            </P.UserWrapper>
         </P.Wrapper>
         { showMenu && <P.MenuBurgerOverlay />}
         <animated.div style={props} >
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
      </>
   )
};

export default Menu;
