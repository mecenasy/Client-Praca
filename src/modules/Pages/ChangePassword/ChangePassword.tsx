
import React, { FC, useRef, useState } from 'react';
import { Field } from 'react-final-form';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import * as P from './parts';
import { validateLoginForm, hasWrapperError } from './helpers';
import { Input } from '../../Components/Input/parts';
import { AuthAction, AuthActionType, LoggedStatus, ChangePasswordData } from '~/src/store/auth/constants';
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
                        <Field name={'oldPassword'} >
                           {({ input, meta }) => (
                              <>
                                 <Input
                                    {...input}
                                    type={'password'}
                                    placeholder={'Stare hasło'}
                                 />
                                 <P.ValidationAlert>
                                    {hasWrapperError(meta) &&
                                       <P.Error>{meta.error}</P.Error>
                                    }
                                 </P.ValidationAlert>
                              </>
                           )}
                        </Field>
                        <Field name={'newPassword'} >
                           {({ input, meta }) => (
                              <>
                                 <Input
                                    {...input}
                                    type={'password'}
                                    placeholder={'Nowe hasło'}
                                 />
                                 <P.ValidationAlert>
                                    {hasWrapperError(meta) &&
                                       <P.Error>{meta.error}</P.Error>
                                    }
                                 </P.ValidationAlert>
                              </>
                           )}
                        </Field>
                        <Field name={'confirmPassword'} >
                           {({ input, meta }) => (
                              <>
                                 <Input
                                    {...input}
                                    type={'password'}
                                    placeholder={'Podwierdź hasło'} />

                                 <P.ValidationAlert>
                                    {hasWrapperError(meta) &&
                                       <P.Error>{meta.error}</P.Error>
                                    }
                                 </P.ValidationAlert>
                              </>
                           )}
                        </Field>
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
