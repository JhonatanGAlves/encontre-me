import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/app-components/Header'
import supabase from '../client'

export const NewCase = () => {
  const [fullName, setFullName] = useState('')
  const [disappearanceDate, setDisappearanceDate] = useState('')
  const [disappearanceCity, setDisappearanceCity] = useState('Selecione a cidade...')
  const [city, setCity] = useState('Selecione a cidade...')
  const [birthDate, setBirthDate] = useState('')
  const [sexo, setSexo] = useState('Selecione o sexo')
  const [motherName, setMotherName] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [contact, setContact] = useState('')
  const [kinshipDegree, setKinshipDegree] = useState('Selecione...')
  const [relevantInformations, setRelevantInformations] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  // const dateNow = moment()

  // const inputDate = document.querySelector('#data-de-nascimento')

  // const value = inputDate.value

  // console.log({ dateNow })

  const handleNewCase = async () => {

    const casesList = {
      nome_completo: fullName,
      data_desaparecimento: disappearanceDate,
      cidade_desaparecimento: disappearanceCity,
      cidade: city,
      data_nascimento: birthDate,
      sexo: sexo,
      nome_mae: motherName,
      nome_pai: fatherName,
      contato: contact,
      grau_parentesco: kinshipDegree,
      informacoes_relevantes: relevantInformations,
      user: user,
      password: password
    }

    try {
      await supabase
        .from('cases_list')
        .insert([casesList])

      setFullName('')
      setDisappearanceDate('')
      setDisappearanceCity('Selecione a cidade...')
      setCity('Selecione a cidade...')
      setBirthDate('')
      setSexo('Selecione o sexo')
      setMotherName('')
      setFatherName('')
      setContact('')
      setKinshipDegree('Selecione...')
      setRelevantInformations('')
      setUser('')
      setPassword('')

    } catch (error) {
      console.log('error', error)
    }
  }

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
                  value={fullName}
                  type='text'
                  id='nome-completo'
                  placeholder='Digite o nome completo...'
                  onChange={(e) => {
                    const value = e.target.value
                    setFullName(value)
                  }}
                />
              </label>
              <label>
                Data do Desaparecimento:
                <input
                  value={disappearanceDate}
                  className='data-desaparecimento'
                  type='date'
                  placeholder='Digite a data do desaparecimento...'
                  onChange={(e) => {
                    const value = e.target.value
                    setDisappearanceDate(value)
                  }}
                />
              </label>
              <label>
                Desapareceu na cidade de:
                <select name='cidade-desaparecimento' id='cidade-desaparecimento'>
                  <option value={disappearanceCity}></option>
                </select>
              </label>
              <label>
                Morador da cidade de:
                <select name='mora-na-cidade' id='mora-na-cidade'>
                  <option value={city}></option>
                </select>
              </label>
              <label>
                Data de Nascimento:
                <input
                  value={birthDate}
                  className='data-nascimento'
                  type='date'
                  placeholder='Digite a data de nascimento...'
                  onChange={(e) => {
                    const value = e.target.value
                    setBirthDate(value)
                  }}
                />
              </label>
              <label>
                Sexo:
                <select name='sexo' id='sexo'>
                  <option value={sexo}></option>
                </select>
              </label>
              <label>
                Nome da mãe:
                <input
                  value={motherName}
                  type='text'
                  id='nome-mãe'
                  placeholder='Digite o nome da mãe...'
                  onChange={(e) => {
                    const value = e.target.value
                    setMotherName(value)
                  }}
                />
              </label>
              <label>
                Nome do pai:
                <input
                  value={fatherName}
                  type='text'
                  id='nome-pai'
                  placeholder='Digite o nome do pai...'
                  onChange={(e) => {
                    const value = e.target.value
                    setFatherName(value)
                  }}
                />
              </label>
              <label>
                Contato:
                <input
                  value={contact}
                  type='tel'
                  id='contato'
                  placeholder='(00) 0000-0000'
                  onChange={(e) => {
                    const value = e.target.value
                    setContact(value)
                  }}
                />
              </label>
              <label>
                Qual o seu grau de parentesco com o desaparecido(a)?
                <select name='grau_parentesco' id='grau_parentesco'>
                  <option value={kinshipDegree}></option>
                </select>
              </label>
              <label>
                Informações relevantes:
                <textarea
                  value={relevantInformations}
                  placeholder='Digite algumas informações relevantes...'
                  onChange={(e) => {
                    const value = e.target.value
                    setRelevantInformations(value)
                  }}
                >
                </textarea>
              </label>
              <label>
                Envie uma foto recente do desaparecido(a).
                <input
                  type='file'
                  id='import-photo'
                />
              </label>
              <div className='form-user-password'>
                <label>
                  Crie um usuário e senha:
                  <input
                    type='text'
                    value={user}
                    placeholder='Usuário...'
                    id='user'
                    onChange={(e) => {
                      const value = e.target.value
                      setUser(value)
                    }}
                  />
                  <p>(6 a 12 caracteres)</p>
                  <input
                    type='password'
                    value={password}
                    placeholder='Senha...'
                    id='password'
                    onChange={(e) => {
                      const value = e.target.value
                      setPassword(value)
                    }}
                  />
                </label>
                <p>(8 a 16 caracteres)</p>
              </div>
              <button
                className='input-button'
                type='submit'
                onClick={(e) => {
                  e.preventDefault()
                  handleNewCase()
                }
                }>Cadastrar</button>
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
        
        .form-user-password {
          margin-top: 20px;
          width: 222px;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #c4c4c4;
          background-color: #FFFFFF;

          input {
            margin: 5px 0 0 0;
            width: 200px;
            border-radius: 0;
          }

          p {
            font-size: 10px;
            margin: 2px 0 0 0;
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