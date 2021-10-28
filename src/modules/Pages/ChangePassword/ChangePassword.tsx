
import React, { FC, useRef, useState } from 'react';
import { Field } from 'react-final-form';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import * as P from './parts';
import { validateLoginForm } from './helpers';
import InputFormWrapper from '../../Components/Input/Input';
import { AuthAction, AuthActionType, LoggedStatus, ChangePasswordData, ChangePasswordField } from '~/src/store/auth/constants';
import { changePasswordRequest } from '~/src/store/auth/actions';
import { loggedInStatusSelector } from '~/src/store/auth/selectors';
import FormWrapper from '../../Components/FormWrapper/FormWrapper';
import { Helmet } from 'react-helmet';
import { FormApi } from 'final-form';

const Login: FC = () => {
   const isLoggedIn = useSelector(loggedInStatusSelector);
   const [isPasswordChanged, setChangedPassword] = useState(false);
   const formRef = useRef<FormApi>();

   const onSubmit = (action: AuthAction, { oldPassword, newPassword }: ChangePasswordData) => {
      return changePasswordRequest(newPassword, oldPassword);
   };

   const getPayload = (action: AuthAction): Record<string, string> | undefined => {
      setChangedPassword(true)

      if (formRef.current) {
         setTimeout(formRef.current.reset)
      }

      if (action.type === AuthActionType.LoginSuccess) {
         return action.errorMessage;
      }
   };

   if (isLoggedIn === LoggedStatus.LoggedOut || isPasswordChanged) {
      return <Redirect to={'/'} />
   }

   if (isLoggedIn === LoggedStatus.Unknown) {
      return null;
   }

   return (
      <P.Wrapper>
         <Helmet>
            <title>Zmiana hasła</title>
            <meta name="description" content={'Zamia hasła użytkownika'} />
         </Helmet>
         <P.BoxWithShadow>
            <P.Title>Zmian hasła</P.Title>
            <P.SubTitle>Aby zmienić hasło wpisz swoje stare hasło oraz nowe i potwierdź je.</P.SubTitle>

            <FormWrapper<AuthAction, ChangePasswordData>
               start={AuthActionType.ChangePasswordRequest}
               resolve={AuthActionType.ChangePasswordSuccess}
               reject={AuthActionType.ChangePasswordFail}
               setPayload={onSubmit}
               getPayload={getPayload}
               validate={validateLoginForm}
            >
               {({ form }) => {
                  formRef.current = form;
                  return (
                     <>
                        <Field
                           name={ChangePasswordField.OldPassword}
                           component={InputFormWrapper}
                           type={'password'}
                           placeholder={'Stare hasło'}
                        />
                        <Field
                           name={ChangePasswordField.NewPassword}
                           component={InputFormWrapper}
                           type={'password'}
                           placeholder={'Nowe hasło'}
                        />
                        <Field
                           name={ChangePasswordField.ConfirmPassword}
                           component={InputFormWrapper}
                           type={'password'}
                           placeholder={'Podwierdź hasło'}
                        />
                        <P.SubmitButton type={'submit'}>Zaloguj</P.SubmitButton>
                     </>
                  )
               }}
            </FormWrapper>
         </P.BoxWithShadow>
      </P.Wrapper>
   );
};

export default Login;
