import { useMemo } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Form from '../Form'

const schema = yup.object().shape({
  id: yup.string().required('Field is required'),
  createdAt: yup.string().required('Field is required'),
  title: yup.string().required('Field is required'),
  body: yup.string().required('Field is required'),
  author: yup.string().required('Field is required'),
  views: yup.number()
    .typeError('Field should contain numbers')
    .min(0, 'Views has to be 0 or greater')
})

function CreateOrUpdateAJokeForm({ children, defaultValues = {} }: any): JSX.Element {
  const options = useMemo(() => ({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      views: 0,
      ...defaultValues
    }
  }), [defaultValues])

  return <Form options={options}>{children}</Form>
}

export default CreateOrUpdateAJokeForm
