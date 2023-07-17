import React from 'react'
import styled from 'styled-components'

type Props = {
  disabled?: boolean,
  selected?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  text: string,
  type?: 'button' | 'submit' | 'reset' | undefined
  dataset?: string,
  styledtype?: 'primary' | 'error',
  height?: string,
  width?: string,
}

function Button({
  onClick,
  text,
  type,
  dataset,
  disabled,
  selected,
  styledtype,
  height,
  width,
}: Props) {
  return (
    <ButtonStyled
      disabled={disabled}
      selected={selected}
      onClick={onClick}
      type={type}
      data-value={dataset}
      styledtype={styledtype}
      height={height}
      width={width}
    >
      {text}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button<any>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 5px;
  font-size: 15px;

  cursor: ${({ disabled }) => disabled ? 'no-drop' : 'pointer'};
  opacity: ${({ disabled, selected }) => (disabled || selected) ? 0.5 : 1};

  ${({ theme, styledtype }) => {
    if (styledtype === 'error') return `
      background: ${theme.tomato};
      color: #fff;
    `

    return `background: ${theme.side};`
  }}
`

export default Button
