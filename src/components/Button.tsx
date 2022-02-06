import React from 'react'
import styled from 'styled-components'
import { ButtonType } from '../types/main'

export const Button = (props: ButtonType) => {
  const StyledButton = {
    width: props.width || '300px',
    backgroundColor: props.bgColor || '#7393C0',
    color: props.color || '#FFF',
    border: props.border || '1px solid #7393C0'
  }

  return (
    <ButtonStyle onClick={props.onClick} style={StyledButton}>
      {props.value}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 300;
  margin: 20px 20px 20px 0;

  &:hover {
    background-color: #7393C0 !important;
    color: #FFF !important;
  }
`