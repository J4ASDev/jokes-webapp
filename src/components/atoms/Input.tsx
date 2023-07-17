import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

type Props = {
  name: string,
  type?: 'text' | 'number',
  placeholder?: string
}

function Input({ name, type = 'text', placeholder }: Props) {
  const { register, formState: { errors }  } = useFormContext()

  const error: string = useMemo(() => String(errors[name]?.message || ''), [errors, name])

  return (
    <InputWrapper>
      <InputStyled type={type} {...register(name)} placeholder={placeholder} />
      <InputMessage error={error?.toString()}>{error}</InputMessage>
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 5px;
`

const InputStyled = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid transparent;

  &:focus {
    outline: none !important;
    border: 1px solid lightgray;
    box-shadow: none;
  }
`

const InputMessage = styled.small<{ error: string }>`
  height: 16px;
  text-align: end;
  color: ${({ error, theme }) => Boolean(error) ? theme.tomato : theme.font};
`

export default Input
