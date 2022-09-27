import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup
      .string()
      .required('Any of your emails would do')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email must be a valid email'),
    password: yup.string().required('Choose a strong password').min(6, 'Password to short'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password must match the above')
      .required('Please confirm your password'),
  })
  .required()
