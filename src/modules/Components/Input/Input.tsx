import React, { FC, ChangeEvent } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { hasWrapperError } from './helpers';
import * as P from './parts';

interface InputProps {
   placeholder: string,
   onChange: (event: ChangeEvent) => void;
   type?: string;
}

export const Input: FC<InputProps> = (props) => (
   <P.Input {...props} />
);

export enum InputType {
   all = 'all',
   onlyError = 'onlyError',
   onlyInput = 'input',
}

type InputFormWrapperProps<T> = FieldRenderProps<T> & { placeholder: string, inputType: InputType }

export const InputFormWrapper = <T extends any>({ input, meta, inputType = InputType.all, ...rest }: InputFormWrapperProps<T>) => (
   <>
      {inputType !== InputType.onlyError && (
         <Input
            {...input}
            {...rest}
         />
      )}
      {inputType !== InputType.onlyInput && (
         <P.ValidationAlert>
            {hasWrapperError<T>(meta) &&
               <P.Error>{meta.error}</P.Error>
            }
         </P.ValidationAlert>
      )}
   </>
)
export default InputFormWrapper;
