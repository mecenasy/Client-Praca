import React, { FC, useCallback, useState } from 'react';
import * as P from './parts';
import PageWrapper from "../../Components/Containers/PageWrapper/PageWrapper";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { loggedInStatusSelector } from "~/src/store/auth/selectors";
import { LoggedStatus } from "~/src/store/auth/constants";
import { getMenuSelector } from '~/src/store/menu/selectors';
import edit from '~/assets/pencil.svg';
import minus from '~/assets/minus.svg';
import plus from '~/assets/plus.svg';
import { MenuSide } from '~/src/store/menu/constants';
import Loadable from '@react-loadable/revised';
import PanelMenuForm from '../../Menu/PanelMenuForm/PanelMenuForm';

const Modal = Loadable({
   loader: async () => import('../../Components/Modal/Modal'),
   loading: () => null,
});

const PanelMenu: FC = () => {
   const isLoggedIn = useSelector(loggedInStatusSelector);
   const { leftSide, } = useSelector(getMenuSelector);

   const [isOpenModal, setOpenModal] = useState(false);
   const toggleModal = useCallback(() => {
      setOpenModal((prev) => !prev);
   }, []);

   return (
      <PageWrapper >
         <Helmet>
            <title>System zarządzania uczelnianego</title>
            <meta name="description" content={'to jest system zzarządzania uczelnianego'} />
         </Helmet>
         {isLoggedIn === LoggedStatus.LoggedIn && (
            <P.MenuPanelWrapper >
               <h1>Konfiguracja Menu</h1>
               <P.AddItemButton onClick={toggleModal}>
                  <P.Pen src={plus} />
                  <P.AddItemText>Dodaj nowe menu</P.AddItemText>
               </P.AddItemButton>
               {leftSide.map((item, index) => (
                  <P.Box key={index}>
                     <P.BoxColumn columWidth={50} >
                        <P.Photo src={item.image || ''} />
                     </P.BoxColumn>
                     <P.BoxColumn columWidth={250} direction={'row'}>
                        <P.BoxInnerColumn  >
                           <div>nazwa : </div>
                           <div>krutka nazwa :</div>
                           <div>pozycja :</div>
                           <div>uryte menu :</div>
                           <div>link :</div>
                           <div>strona nemu :</div>
                        </P.BoxInnerColumn>
                        <P.BoxInnerColumn>
                           <div>{item.name}</div>
                           <div>{item.shortName || 'brak krótkiej nazwy'}</div>
                           <div>{item.position}</div>
                           <div>{item.hidden ? 'menu ukryte' : 'menu widocznne'}</div>
                           <div>{item.link}</div>
                           <div>{item.menuSide === MenuSide.Left ? 'strona lewa' : 'strona prawa'}</div>
                        </P.BoxInnerColumn>
                     </P.BoxColumn>
                     <P.BoxColumn columWidth={30} direction={'column'}>
                        <P.Button>
                           <P.Pen src={edit} />
                        </P.Button>
                        <P.Button>
                           <P.Pen src={minus} />
                        </P.Button>
                     </P.BoxColumn>
                  </P.Box>
               ))}
               {!SERVER_BUILD && (
                  <Modal
                     onClose={toggleModal}
                     isOpen={isOpenModal}
                     title={'Dodawanie menu'}
                  >
                     <PanelMenuForm />
                  </Modal>
               )}
            </P.MenuPanelWrapper>
         )}
      </PageWrapper >
   )
};

export default PanelMenu;
