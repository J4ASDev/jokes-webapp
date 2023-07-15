import React from 'react'

type Props = {
  onClick?: () => void
  text: string
}

function Button({ onClick, text }: Props) {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default Button
