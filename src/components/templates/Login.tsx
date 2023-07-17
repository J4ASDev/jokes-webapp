import styled from 'styled-components'

import Button from '../atoms/Button'

type Props = {
  handleSetToken: () => void
}

function LoginTemplate({ handleSetToken }: Props) {
  return (
    <Wrapper>
      <h1><strong>Logicea</strong> assignment</h1>
      <Button
        onClick={handleSetToken}
        text='Login'
        width='200px'
        height='40px'
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default LoginTemplate
