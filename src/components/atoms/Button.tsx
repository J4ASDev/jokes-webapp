import React from 'react'
import styled from 'styled-components'

type Props = {
  disabled?: boolean,
  selected?: boolean,
  
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  text: string,
  type?: 'button' | 'submit' | 'reset' | undefined
  dataset?: string,
  styledType?: 'primary' | 'error'
}

function Button({
  onClick,
  text,
  type,
  dataset,
  disabled,
  selected,
  styledType
}: Props) {
  return (
    <ButtonStyled
      disabled={disabled}
      selected={selected}
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

  cursor: ${({ disabled }) => disabled ? 'no-drop' : 'pointer'};
  opacity: ${({ disabled, selected }) => (disabled || selected) ? 0.5 : 1};

  ${({ theme, styledType }) => {
    if (styledType === 'error') return `
      background: ${theme.tomato};
      color: #fff;
    `

    return `background: ${theme.side};`
  }}
`

export default Button
