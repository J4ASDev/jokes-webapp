import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

type Props = {
  name: string,
  type?: 'text' | 'number'
}

function Input({ name, type = 'text' }: Props) {
  const { register, formState: { errors }  } = useFormContext()

  const error: string = useMemo(() => String(errors[name]?.message || ''), [errors[name]])

  return (
    <InputWrapper>
      <InputStyled type={type} {...register(name)} />
      <InputMessage error={Boolean(error)}>{error}</InputMessage>
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
  border: none;
  padding: 10px;
  border-radius: 10px;
`

const InputMessage = styled.small<any>`
  height: 16px;
  text-align: end;
  color: ${({ error, theme }) => error ? theme.tomato : 'black'};
`

export default Input
