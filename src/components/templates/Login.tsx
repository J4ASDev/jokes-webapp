import React from 'react'
import Button from '../atoms/Button'

type Props = {
  handleSetToken: () => void
}

function LoginTemplate({ handleSetToken }: Props) {
  return (
    <div>
      <h1><strong>Logicea</strong> assignment</h1>
      <Button onClick={handleSetToken} text='Login' />
    </div>
  )
}

export default LoginTemplate
