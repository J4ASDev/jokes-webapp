import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  name: string,
  type?: 'text' | 'number'
}

function Input({ name, type = 'text' }: Props) {
  const { register, formState: { errors }  } = useFormContext()

  const error: string = useMemo(() => String(errors[name]?.message || ''), [errors[name]])

  return (
    <div>
      <input type={type} {...register(name)} />
      <small style={{ opacity: Boolean(error) ? '1' : '0' }}>{error}</small>
    </div>
  )
}

export default Input
