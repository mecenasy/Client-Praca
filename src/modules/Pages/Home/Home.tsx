import React, { FC, useContext } from "react";
import { Helmet } from "react-helmet";
import * as P from './parts';
import PageWrapper from "../../Components/Contaners/PageWrapper/PageWrapper";
import { useSelector } from "react-redux";
import { getMenuSelector } from "../../../store/menu/selectors";
import MenuItem from "../../MenuItem/MenuItem";
import { getPerson } from "../../../store/person/selectors";
import PersonDataRow from "../../PersonDataRow/PersonDataRow";

export const Home: FC = () => {
   const { leftSide, rightSide } = useSelector(getMenuSelector);
   const person = useSelector(getPerson);
   return (
      <PageWrapper pickUp >
         <Helmet>
            <title>System zarządzania uczelnianego</title>
            <meta name="description" content={'to jest system zzarządzania uczelnianego'} />
         </Helmet>
         <P.Wrapper >
            <P.Row >
               <P.BoxUser >
                  <P.Photo src={person.photo || ''} />
                  <div>
                     <PersonDataRow title={'Imie Nazwisko'} data={`${person.name} ${person.surname}`} />
                     <PersonDataRow title={'Wydział'} data={person.direction} />
                     <PersonDataRow title={'Specjalność'} data={person.specialty} />
                     <PersonDataRow title={'Numer albumu'} data={person.album.toString()} />
                     <PersonDataRow title={'Rok'} data={person.year} />
                     <PersonDataRow title={'Semestr'} data={person.semester} />
                     <PersonDataRow title={'Grupa'} data={person.group} />
                  </div>
               </P.BoxUser>
            </P.Row>
            <P.Row  >
               {leftSide.filter(({ hidden }) => !hidden).map((item) => (
                  <P.Col key={item.link}>
                     <MenuItem {...item} />
                  </P.Col>
               ))}
            </P.Row>
            <P.Row >
               {rightSide.map((item) => (
                  <P.Col key={item.link}>
                     <MenuItem {...item} />
                  </P.Col>
               ))}
            </P.Row>
         </P.Wrapper>
      </PageWrapper >
   )
};

export default Home
