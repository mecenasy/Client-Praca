
import React, { FC } from 'react';
import { Field } from 'react-final-form';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import * as P from './parts';
import { validateLoginForm, hasWrapperError } from './helpers';
import { Input } from '../../Components/Input/parts';
import { AuthAction, AuthActionType, LoginData } from '~/src/store/auth/constants';
import { loginRequest } from '~/src/store/auth/actions';
import { isLoggedInSelector } from '~/src/store/auth/selectors';
import FormWrapper from '../../Components/FormWrapper/FormWrapper';
import Alert from '../../Components/Alert/Alert';
import { AlertType } from '../../Components/Alert/types';

const Login: FC = () => {
   const isLoggedIn = useSelector(isLoggedInSelector);

   const onSubmit = (action: AuthAction, { password, user }: LoginData) => {
      return loginRequest(user, password);
   };
   const getPayload = (action: AuthAction): Record<string, string> | undefined => {
      if (action.type === AuthActionType.LoginSuccess) {
         return action.errorMessage;
      }
   };

   if (isLoggedIn) {
      return <Redirect to={'/'} />
   }

   return (
      <P.BoxWithShadow>
         <P.Title>Witaj w systemie uczelnianym</P.Title>
         <P.SubTitle>Aby wejśc do systemy należy podać login i hasło</P.SubTitle>

         <FormWrapper<AuthAction, LoginData>
            start={AuthActionType.LoginRequest}
            resolve={AuthActionType.LoginSuccess}
            reject={AuthActionType.LoginFail}
            setPayload={onSubmit}
            getPayload={getPayload}
            validate={validateLoginForm}
         >
            <Field name={'error'} >
               {({ meta }) => (
                  <P.ValidationAlert>
                     {hasWrapperError(meta) &&
                        <Alert message={meta.submitError} type={AlertType.error} />
                     }
                  </P.ValidationAlert>
               )
               }
            </Field>
            <Field name={'user'} >
               {({ input, meta }) => (
                  <>
                     <Input {...input} type={'text'} placeholder={'Login'} />
                     <P.ValidationAlert>
                        {hasWrapperError(meta) &&
                           <P.Error>{meta.error}</P.Error>
                        }
                     </P.ValidationAlert>
                  </>
               )}
            </Field>
            <Field name={'password'} >
               {({ input, meta }) => (
                  <>
                     <Input {...input} type={'password'} placeholder={'Hasło'} />
                     <P.ValidationAlert>
                        {hasWrapperError(meta) &&
                           <P.Error>{meta.error}</P.Error>
                        }
                     </P.ValidationAlert>
                  </>
               )}
            </Field>
            <P.SubmitButton type={'submit'}>Zaloguj</P.SubmitButton>
         </FormWrapper>
      </P.BoxWithShadow>
   );
};

export default Login;
