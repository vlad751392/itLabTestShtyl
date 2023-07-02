import * as yup from 'yup';

import { emailScheme } from './emailScheme';

export const scheme = yup.object({
  name: yup.string().required(),
  email: emailScheme,
  subject: yup.string().required(),
  message: yup.string().required()
});
