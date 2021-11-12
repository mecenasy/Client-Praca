import React, { FC } from 'react';
import * as P from './parts';
import { Field } from 'react-final-form';
import { MenuItemAction, MenuItemData, MenuItemActionType, MenuItemField } from '~/src/store/panelMenu/constants';
import { SetPayload } from '../../Components/FormWrapper/FormWrapper';
import InputWithLabel from '../../Components/Input/InputWithLabel';
import Toggle from '../../Components/Input/Toggle';
import Dropzone from '../../Components/Input/Dropzone';
import Dropdown from '../../Components/Input/Dropdown';

const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' }
]

const PanelMenuForm: FC = () => {
   const onSubmit: SetPayload<MenuItemAction, MenuItemData> = (action, value) => {
      console.log("🚀 ~ file: PanelMenuForm.tsx ~ line 20 ~ value", value)
      return action
   }
   return (
      <div>
         <P.FromWrapper
            start={MenuItemActionType.MenuItemRequest}
            resolve={MenuItemActionType.MenuItemSuccess}
            reject={MenuItemActionType.MenuItemFail}
            setPayload={onSubmit}
         >
            {() => (
               <>
                  <Field
                     name={MenuItemField.Name}
                     component={InputWithLabel}
                     type={'text'}
                     placeholder={'Podaj nazwę'}
                     label={'Nazwa menu'}
                  />
                  <Field
                     name={MenuItemField.ShortName}
                     component={InputWithLabel}
                     type={'text'}
                     placeholder={'Podaj krutką nazwę'}
                     label={'Krutka nazwa menu'}
                  />
                  {/*docelowo ma się tworzyć automatycznie */}
                  <Field
                     name={MenuItemField.Position}
                     component={InputWithLabel}
                     type={'number'}
                     placeholder={'Pozycja'}
                     label={'Pozycja menu'}
                  />
                  <div>
                     <Field
                        name={MenuItemField.Hidden}
                        component={Toggle}
                        type="checkbox"
                        icons={false}
                        label={'Menu widoczne'}
                        leftText={'widoczne'}
                        rightText={'nie widoczne'}
                     />
                     <Field
                        name={MenuItemField.Side}
                        component={Toggle}
                        type="checkbox"
                        icons={false}
                        label={'Strona menu'}
                        leftText={'lewa'}
                        rightText={'prawa'}
                     />
                  </div>
                  <Field
                     name={MenuItemField.Link}
                     component={InputWithLabel}
                     type={'text'}
                     placeholder={'Podaj link do menu'}
                     label={'Link do menu'}
                  />
                  <Field
                     name={MenuItemField.Role}
                     component={Dropdown}
                     placeholder={'wybież dla kogo dostępne jest menu'}
                     label={'Przeznaczenie  menu'}
                     options={options}
                  />
                  <Field
                     name={MenuItemField.Image}
                     component={Dropzone}
                     type={'file'}
                     label={'Ikona menu'}
                  />
                  <P.SubmitButton type={'submit'}>zapisz</P.SubmitButton>
               </>
            )}
         </P.FromWrapper>
      </div>
   )
};

export default PanelMenuForm;
