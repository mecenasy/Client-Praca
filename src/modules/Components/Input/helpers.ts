import { FieldRenderProps } from "react-final-form";

export const hasWrapperError = <T>({
   touched,
   error,
   dirty,
   submitFailed,
   submitError
}: FieldRenderProps<T>['meta']): boolean => (
   (touched && error && dirty) || !!(submitFailed && submitError)
);
