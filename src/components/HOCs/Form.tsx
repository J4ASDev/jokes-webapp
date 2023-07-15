import { FormProvider, useForm } from 'react-hook-form'

const Form = ({ children, onSubmit, options }: any) => {
  const methods = useForm(options)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
