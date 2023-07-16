import React from 'react'
import styled from 'styled-components'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  text: string,
  type?: 'button' | 'submit' | 'reset' | undefined
  dataset?: string,
  styledType?: 'primary' | 'error'
}

function Button({ onClick, text, type, dataset, styledType }: Props) {
  return (
    <ButtonStyled
      onClick={onClick}
      type={type}
      data-value={dataset}
      styledType={styledType}
    >
      {text}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button<any>`
  width: 145px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  ${({ theme, styledType }) => {
    if (styledType === 'error') return `
      background: ${theme.tomato};
      color: #fff;
    `

    return `background: ${theme.side};`
  }}
`

export default Button
