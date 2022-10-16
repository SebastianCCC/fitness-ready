import * as yup from 'yup'

export const schema = yup
  .object({
    name: yup
      .string()
      .required('(A workout must contain a name.)')
      .min(2, '(To short for a name.)'),
    time: yup.string().required('(A time must be provided.)'),
  })
  .required()
