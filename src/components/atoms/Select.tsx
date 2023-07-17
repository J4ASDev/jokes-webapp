import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import SelectOptions from '../../ts/types/SelectOptions'

type Props = {
  name: string,
  type?: 'text' | 'number',
  options: SelectOptions[]
}

function Select({ name, options }: Props) {
  const { register, formState: { errors }  } = useFormContext()

  const error: string = useMemo(() => String(errors[name]?.message || ''), [errors, name])

  return (
    <Wrapper>
      <SelectWrapper {...register(name)}>
        {options?.map(({ value, text }: SelectOptions) => <option value={value} key={value}>{text}</option>)}
      </SelectWrapper>

      <Message error={error?.toString()}>{error}</Message>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 5px;
`

const SelectWrapper = styled.select`
  width: 200px;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid transparent;

  &:focus {
    outline: none !important;
    border: 1px solid lightgray;
    box-shadow: none;
  }
`

const Message = styled.small<{ error: string }>`
  height: 16px;
  text-align: end;
  color: ${({ error, theme }) =>  Boolean(error) ? theme.tomato : theme.font};
`

export default Select
