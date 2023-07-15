import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  name: string,
  type?: string
}

function Input({ name, type = 'text' }: Props) {
  const { register, formState: { errors }  } = useFormContext()

  const error: string = useMemo(() => String(errors[name]?.message), [errors[name]])

  return (
    <div>
      <input type={type} {...register(name)} />
      <small>{error}</small>
    </div>
  )
}

export default Input
