import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup
      .string()
      .required('Your email is required')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email must be a valid email'),
    password: yup.string().required('Your password is required').min(6, 'Password to short'),
  })
  .required()
