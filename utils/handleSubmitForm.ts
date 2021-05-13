import { Config } from 'final-form';

export const handleAsyncFormSubmit = (asyncSubmit: Config['onSubmit']): Config['onSubmit'] => async (values, form, callback) => {
   try {
      return await asyncSubmit(values, form);
   } catch (error) {
      callback?.(error);
   }
};
