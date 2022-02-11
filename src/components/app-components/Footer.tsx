import React from 'react'
import styled from 'styled-components'
import { Buttons } from './Main'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <StyledFooter>
        <div className='encontre-me-footer'>
          <h3>encontre-me</h3>
          <hr style={{ margin: '0' }} />
          <p>projeto voluntário em prol de pessoas desaparecidas</p>
        </div>
        <h3>Vamos juntos, diminuir o número de casos e aumentar o número de famílias felizes!</h3>
        <Buttons style={{ margin: 'auto' }}>
          <a href='/'>
            <button className='anjo-button'>ser um anjo</button>
          </a>
          <a href='/'>
            <button className='caso-button'>novo caso</button>
          </a>
        </Buttons>
      </StyledFooter>
      <StyledBaseBoard>
        <p>Direitos reservados &copy;{currentYear} <a href='/'>ENCONTRE-ME</a> | Desenvolvido por <a href='https://github.com/JhonatanGAlves' target='_blank' rel='noreferrer'>Jhonatan Alves</a><br />
          <a href='/'>Termos de Uso</a> | <a href='/'>Política de Privacidiade</a>
        </p>
      </StyledBaseBoard>
    </>
  )
}

export default Footer

const StyledFooter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 80px 0;

  background-color: #2E2E2E;

  .encontre-me-footer {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 335px;

    h3 {
      margin: 0;
      text-align: center;
      font-size: 45px;
      font-weight: 900;
      text-transform: uppercase;

      color: #FFF;
    }

    hr {
      margin-left: 6px !important;
      width: 321px;
    }

    p {
      margin: 5px;
      text-align: center;
      font-size: 10.5px;
      font-weight: 600;
      text-transform: uppercase;

      color: #FFF;
    }
  }

  h3 {
    margin: 70px 0 30px;
    font-size: 21px;
    font-weight: 300;

    color: #FFF;
  }
`

const StyledBaseBoard = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: #252525;

  p {
    line-height: 25px;

    color: #FFF;

    a {
      text-decoration: none;
      font-weight: bold;

      color: #FFF;

      &:hover {
        color: #e4e4e4;
      }
    }
  }
`