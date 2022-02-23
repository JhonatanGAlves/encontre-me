import React from 'react'
import styled from 'styled-components'
import Header from '../components/app-components/Header'

export const RegisteredCases = () => {
  return (
    <StyledRegisteredCases>
      <Header />
      <main className='container-main-casos'>
        <div className='content-left'>
          <div className='container-registrar-caso'>
            <span>Você tem algum caso?</span>
            <a href='/'>
              <button className='button-registrar'>Registrar</button>
            </a>
          </div>
          <div className='container-pesquisa-rapida'>
            <span>pesquisa rápida</span>
            <form>
              <label>
                ID do caso
                <input className='input-id' type='number' name='id' />
              </label>
              <label>
                Nome
                <input type='text' name='name' />
              </label>
              <label>
                Sobrenome
                <input type='text' name='last-name' />
              </label>
              <label>
                Cidade
                <select className='select-field'>
                  <option value='selected-city'>Selecione...</option>
                </select>
              </label>
              <label>
                Estado
                <select className='select-field'>
                  <option value='selected-state'>Selecione...</option>
                </select>
              </label>
            </form>
          </div>
        </div>
        <div className='content-right'>
          <h2>casos registrados</h2>
        </div>
      </main>
    </StyledRegisteredCases>
  )
}

export default RegisteredCases

const StyledRegisteredCases = styled.section`
  margin: 0;
  width: 100%;

  background-color: #EBEBEB;

  .container-header {
    position: initial;

    background-color: #3F5F8B;
  }

  .container-main-casos {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 1465px;
    max-width: 1465px;
    padding: 50px 0;

    /* background-color: #001b41; */

    .content-left {
      display: flex;
      flex-direction: column;
      margin: 0;

      .container-registrar-caso {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 45px 20px 0;
        width: 365px;
        height: 190px;
        font-size: 24px;
        font-weight: 300;

        color: #747474;
        background-color: #FFF;
        box-shadow: 0 16px 16px -8px #00000025;

        span {
          margin-bottom: 20px;
        }

        .button-registrar {
          padding: 0;
          width: 315px;
          height: 85px;
          font-size: 24px;
          border: none;
          cursor: pointer;

          color: #FFF;
          background-color: #747474;

          &:hover {
            background-color: #C4C4C4;
          }
        }
      }

      .container-pesquisa-rapida {
        padding: 50px 20px;
        margin-top: 50px;
        width: 365px;
        font-size: 24px;
        font-weight: 300;

        color: #747474;
        background-color: #FFF;
        box-shadow: 0 16px 16px -8px #00000025;

        span {
          text-transform: capitalize;
          font-weight: 600;
        }

        form {
          margin-top: 20px;

          label {
            display: flex;
            flex-direction: column;
            font-size: 18px;
            margin-top: 10px;

            input {
              margin-top: 3px;
              padding: 5px;
              height: 20px;
              font-size: 18px;
              outline: 0;

              border: 1px solid #747474;
            }

            .input-id {
              width: 100px;
            }
          }

          select {
            height: 32px;
            outline: 0;
            font-size: 16px;

            color: #747474;
          }

          .select-field {
            width: 250px;
          }
        }
      }
    }

    .content-right {
      width: 900px;

      background-color: #FFF;
      box-shadow: 0 16px 16px -8px #00000025;

      h2 {
        font-size: 48px;
        text-transform: capitalize;

        color: #747474;
      }
    }
  }
`