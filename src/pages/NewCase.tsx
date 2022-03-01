import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import Header from '../components/app-components/Header'
import moment from 'moment'

export const NewCase = () => {
  const dateNow = moment()

  const inputDate = document.querySelector('#data-de-nascimento')

  // const value = inputDate.value

  console.log({ dateNow })

  return (
    <StyledNewCase>
      <Header />
      <StyledMain>
        <section className='form-new-case'>
          <div className='content-left'>
            <h2>Cadastre o <strong>seu caso!</strong></h2>
            <p>Ao cadastrar o seu caso, ele será <strong>enviado</strong> para outras pessoas através do <i>"WhatsApp"</i> e <i>"SMS"</i>, com todas as <strong>informações</strong> cadastradas.</p>
            <hr />
            <p className='intuito'>O intuito é fazer com que, <strong>em pouco tempo</strong>, muitas pessoas passam a <strong>ficar sabendo</strong> do desaparecimento do mesmo, fazendo com que <strong>encontre-o</strong> o quanto antes!</p>
            <hr />
          </div>
          <div className='content-right'>
            <form method='POST' className='form-group'>
              <span>Preencha com as informações do(a) desaparecido(a).</span><br /><br />
              <label>
                Nome Completo:
                <input
                  type='text'
                  id='nome-completo'
                  placeholder='Digite o nome completo...'
                />
              </label>
              <label>
                Data do Desaparecimento: {dateNow ? `(À ${23} anos atrás)` : ''}
                <input className='data-desaparecimento'
                  type='date'
                  placeholder='Digite a data do desaparecimento...'
                />
              </label>
              <label>
                Desapareceu na cidade de:
                <select name='cidade-desaparecimento' id='cidade-desaparecimento'>
                  <option value=''>Selecione a cidade</option>
                </select>
              </label>
              <label>
                Morador da cidade de:
                <select name='mora-na-cidade' id='mora-na-cidade'>
                  <option value=''>Selecione a cidade</option>
                </select>
              </label>
              <label>
                Data de Nascimento: {dateNow ? `(Atualmente com ${23})` : ''}
                <input className='data-nascimento'
                  type='date'
                  placeholder='Digite a data de nascimento...'
                />
              </label>
              <label>
                Nome da mãe:
                <input
                  type='text'
                  id='nome-mãe'
                  placeholder='Digite o nome da mãe...'
                />
              </label>
              <label>
                Nome do pai:
                <input
                  type='text'
                  id='nome-pai'
                  placeholder='Digite o nome do pai...'
                />
              </label>
              <label>
                Contato:
                <input
                  type='tel'
                  id='contato'
                  placeholder='(00) 0000-0000'
                />
              </label>
              <label>
                Qual o seu grau de parentesco com o desaparecido(a)?
                <input
                  type='text'
                  id='grau-parentesco'
                  placeholder='Digite o grau de parentesco...'
                />
              </label>
              <label>
                Informações relevantes:
                <textarea placeholder='Digite algumas informações relevantes...'></textarea>
              </label>
              <label>
                Envie uma foto recente do desaparecido(a).
                <input
                  type='file'
                  id='import-photo'
                />
              </label>
              <button className='input-button' type='submit'>Cadastrar</button>
            </form>
          </div>
        </section>
      </StyledMain>
    </StyledNewCase>
  )
}

export default NewCase

const StyledNewCase = styled.body`
  margin: 0;
  width: 100%;

  background-color: #EBEBEB;

  .container-header {
    position: initial;

    background-color: #3F5F8B;
  }
`
const StyledMain = styled.main`
  width: 100%;
  padding: 50px 0;

  .form-new-case {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 1465px;

    color: #747474;

    .content-left {
      padding-top: 130px;
      width: 800px;

      h2 {
        font-size: 48px;
        font-weight: 300;

        color: #3F5F8B;
      }

      p {
        font-size: 18px;
      }

      .intuito {
        font-size: 22px;
        font-weight: 300;

        color: #3F5F8B;
      }
    }

    .content-right {
      /* width: 800px; */
      padding: 20px;

      .form-group {
        width: 100%;

        span {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }
  
        label {
          display: flex;
          flex-direction: column;
  
          color: #747474;
  
          input, select, textarea {
            margin-top: 5px;
            margin-bottom: 20px;
            padding: 10px;
            width: 500px;
            font-size: 13px;
            outline: none;
            border-radius: 5px;
  
            border: 1px solid #c4c4c4;
          }

          select {
            width: 200px;
          }

          .data-nascimento, .data-desaparecimento {
            width: 130px;
          }

          textarea {
            height: 200px;
          }
        }

        button.input-button {
          width: 140px;
          height: 50px;
          font-size: 18px;
          text-transform: capitalize;
          border: none;
          border-radius: 5px;
          margin-top: 20px;
          cursor: pointer;

          color: #FFF;
          background-color: #3F5F8B;

          &:hover {
            background-color: #4d7ab9;
          }
        }
      }
    }
  }
`