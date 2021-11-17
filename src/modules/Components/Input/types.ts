import { ChangeEvent } from 'react';
import { FieldRenderProps } from 'react-final-form';
export interface DroppedFile extends File {
   path: string;
   preview: string;
   lastModifiedDate: Date;
   size: number;
   type: string;
}

export interface InputProps {
   placeholder: string,
   onChange: (event: ChangeEvent) => void;
   type?: string;
}

export enum InputType {
   all = 'all',
   onlyError = 'onlyError',
   onlyInput = 'input',
}

export type InputFormWrapperProps<T> = FieldRenderProps<T> & {
   placeholder: string,
   inputType: InputType
   label: string;
};

export interface Option<T> {
   value: T;
   label: string;
}

export type DropzoneProps = FieldRenderProps<DroppedFile> & { label: string }

export type DropdownProps<T> = FieldRenderProps<Option<T>> & {
   options: Array<Option<T>>
   isMulti: boolean;
   label: string;
}

export type ToggleProps = FieldRenderProps<string> & {
   icons: boolean;
   label: string;
   leftText?: string;
   rightText?: string
   className?: string;
}
