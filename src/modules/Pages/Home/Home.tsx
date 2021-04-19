import React, { FC } from "react";
import { Helmet } from "react-helmet";
import * as P from './parts';
import PageWrapper from "../../Components/Contaners/PageWrapper/PageWrapper";
import { useSelector } from "react-redux";
import { getMenuSelector } from "../../../store/menu/selectors";
import MenuItem from "../../MenuItem/MenuItem";
import { getPerson } from "../../../store/person/selectors";
import Photo from "../../Photo/Photo";
import PersonDataRow from "../../PersonDataRow/PersonDataRow";

export const Home: FC = () => {
   const { leftSide, rightSide } = useSelector(getMenuSelector);
   const person = useSelector(getPerson);

   return (
      <PageWrapper >
         <Helmet>
            <title>System zarządzania uczelnianego</title>
            <meta name="description" content={'to jest system zarządzania uczelnianego'} />
         </Helmet>
         <P.Wrapper >
            <P.InnerWrapper >
               <P.BoxUser >
                  <Photo src={person.photo || ''} />
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
            </P.InnerWrapper>
            <P.InnerWrapper  >
               {leftSide.map((item) => (
                  <MenuItem
                     key={item.link}
                     {...item}
                  />
               ))}
               {leftSide.length % 2 === 1 && <P.EmptyBox />}
            </P.InnerWrapper>
            <P.InnerWrapper >
               {rightSide.map((item) => (
                  <MenuItem
                     key={item.link}
                     {...item}
                  />
               ))}
            </P.InnerWrapper>
         </P.Wrapper>
      </PageWrapper >
   )
};

export default Home
