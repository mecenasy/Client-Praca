import { FieldRenderProps } from "react-final-form";
import { LoginData } from "~/src/store/auth/constants";

export const validateLoginForm = (value: any) => {
  const error: Partial<LoginData> = {};
  if (!value.user) {
    error.user = 'musisz podać login';
  }
  if (!value.user) {
    error.password = 'musisz podać hasło';
  }
  if (value.user && value.user.length < 8) {
    error.user = 'login musi mieć przynajmniej osiem znaków';
  }
  if (value.password && value.password.length < 8) {
    error.password = 'hasło musi mieć przynajmniej osiem znaków';
  }
  return error;
};

export const hasWrapperError = ({
  touched,
  error,
  dirty,
  submitFailed,
  submitError
}: FieldRenderProps<LoginData>['meta']): boolean => (
   (touched && error && dirty) || !!(submitFailed && submitError)
  );
