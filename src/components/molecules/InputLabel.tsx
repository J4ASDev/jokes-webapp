import styled from 'styled-components'

import Input from '../atoms/Input'

type Props = {
  label: string,
  name: string,
  type?: 'text' | 'number'
}

function InputLabel({ label, name, type }: Props) {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <Input name={name} type={type} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: start;
`

export default InputLabel
