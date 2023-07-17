import { useMemo } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Form from '../Form'

const schema = yup.object().shape({
  search: yup.string(),
})

function DashboardForm({ children, defaultValues}: any): JSX.Element {
  const options = useMemo(() => ({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues
  }), [defaultValues])

  return <Form options={options}>{children}</Form>
}

export default DashboardForm
