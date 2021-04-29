import React, { FC, useContext } from 'react';
import { ResponsiveContext } from '../../Providers/ResponsiveProvider/ResponsiveProvider';
import { Menu } from '../../store/menu/constants';
import * as P from './parts';

interface MenuItem extends Menu {
   onClick?: () => void;
   asButton?: boolean;
   isSmall?: boolean;
   forceShow?: boolean;
}

const MenuItem: FC<MenuItem> = ({
   asButton,
   image,
   hidden,
   link,
   name,
   onClick,
   isSmall = false,
   forceShow = false,
}) => {
   const { isMobile } = useContext(ResponsiveContext);

   return (
      <P.Link
         {...(asButton
            ? { as: 'button' }
            : { to: link, }
         )}
         onClick={onClick}
         isHidden={Boolean(hidden && !forceShow)}
         isSmall={isSmall}
      >
         <P.Box >
            <P.Image src={image} />
            {!isSmall && !isMobile && <P.Text>{name}</P.Text>}
         </P.Box>
      </P.Link >
   )
};

export default MenuItem;
