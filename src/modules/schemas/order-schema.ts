import * as yup from 'yup'

export const schemaFilters = yup.object().shape({
  title: yup.string().nullable(),
  category: yup.string().nullable()
})

export const schemaData = yup.object().shape({
  title: yup.string().required('Campo Obrigátorio'),
  category: yup.string().required('Campo Obrigátorio'),
  description: yup.string().required('Campo Obrigátorio')
})
