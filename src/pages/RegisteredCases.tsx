import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import Header from '../components/app-components/Header'
import supabase from '../client'

export const RegisteredCases = () => {
  const [casesList, setCasesList] = useState([])
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const [nameMother, setNameMother] = useState('')
  const [nameFather, setNameFather] = useState('')

  const searchName = (e: any) => {
    setSearch(e.target.value)
    setName(e.target.value)
  }

  const searchNameMother = (e: any) => {
    setSearch(e.target.value)
    setNameMother(e.target.value)
  }

  const searchNameFather = (e: any) => {
    setSearch(e.target.value)
    setNameFather(e.target.value)
  }

  useEffect(() => {
    fetchCases()
  }, [])

  async function fetchCases() {
    const { data }: any = await supabase
      .from('cases_list')
      .select('*')
    setCasesList(data)
    console.log('cases', data)
  }

  const filteredCases = useMemo(() => {
    if (casesList) {
      return casesList.filter(
        (cases: any) =>
          cases.nome_completo.toLowerCase().includes(search.toLowerCase()) ||
          cases.nome_mae.toLowerCase().includes(search.toLowerCase())
      )
    } else {
      return []
    }
  }, [casesList, search])

  return (
    <StyledRegisteredCases>
      <Header />
      <main className='container-main-cases'>
        <div className='content-left'>
          <div className='container-register-cases'>
            <span>Você tem algum caso?</span>
            <a href='/novo-caso'>
              <button className='button-register'>Registrar</button>
            </a>
          </div>
          <div className='container-quick-search'>
            <span>pesquisa rápida</span>
            <form>
              <label>
                Nome:
                <input
                  className='full-name'
                  type='text'
                  value={name}
                  onChange={searchName}
                />
              </label>
              <label>
                Nome da Mãe:
                <input
                  className='input-name-mother'
                  type='text'
                  value={nameMother}
                  onChange={searchNameMother}
                />
              </label>
              <label>
                Nome do Pai:
                <input
                  className='input-name-father'
                  type='text'
                  value={nameFather}
                  onChange={searchNameFather}
                />
              </label>
              <label>
                Morador da Cidade de:
                <select className='select-field'>
                  <option value='selected-city'>Selecione...</option>
                </select>
              </label>
              <label>
                Sexo
                <select className='select-field'>
                  <option value='selected-sexo'>Selecione...</option>
                </select>
              </label>
              <button type='submit'>pesquisar</button>
            </form>
          </div>
        </div>
        <div className='content-right'>
          <h2>casos registrados</h2>
          <table>
            <thead>
              <tr>
                <th>ID Caso</th>
                <th>Data Post.</th>
                <th>Nome Completo.</th>
                <th>Data Desap.</th>
                <th>Cidade Desap.</th>
                <th>Morava em</th>
                <th>Data de Nasc.</th>
                <th>Sexo</th>
                <th>Nome da Mãe</th>
                <th>Nome do Pai</th>
                <th>Contato</th>
                <th>Grau de Parentesco</th>
                <th>Info. Relevantes</th>
              </tr>
            </thead>
            <tbody>
              {filteredCases.map((cases: any) => (
                <tr key={cases.id}>
                  <td>{cases.id}</td>
                  <td>{cases.data_postagem}</td>
                  <td>{cases.nome_completo}</td>
                  <td>{cases.data_desaparecimento}</td>
                  <td>{cases.cidade_desaparecimento}</td>
                  <td>{cases.cidade}</td>
                  <td>{cases.data_nascimento}</td>
                  <td>{cases.sexo}</td>
                  <td>{cases.nome_mae}</td>
                  <td>{cases.nome_pai}</td>
                  <td>{cases.contato}</td>
                  <td>{cases.grau_parentesco}</td>
                  <td>{cases.informacoes_relevantes}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

  .container-main-cases {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 95%;
    padding: 50px 0;

    .content-left {
      display: flex;
      flex-direction: column;
      margin: 0;

      .container-register-cases {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 45px 20px 0;
        width: 345px;
        height: 170px;
        font-size: 24px;
        font-weight: 300;

        color: #747474;
        background-color: #FFF;
        box-shadow: 0 16px 16px -8px #00000025;

        span {
          margin-bottom: 20px;
        }

        .button-register {
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

      .container-quick-search {
        padding: 50px 20px;
        margin-top: 50px;
        width: 345px;
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

          button {
            width: 140px;
            height: 50px;
            font-size: 18px;
            text-transform: capitalize;
            border: none;
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

    .content-right {
      background-color: #FFF;
      box-shadow: 0 16px 16px -8px #00000025;

      h2 {
        font-size: 48px;
        text-transform: capitalize;

        color: #747474;
      }

      table {
        table-layout: fixed;
        border-collapse: collapse;
        width: 100%;
        max-width: 100%;

        th, td {
          padding: 5px;
          font-size: 16px;
          text-align: left;
        }

        /* td:nth-child(1), th:nth-child(1) { min-width: 200px; }
        td:nth-child(2), th:nth-child(2) { min-width: 200px; }
        td:nth-child(3), th:nth-child(3) { width: 350px; } */
      }
      
      thead {
        background-color: #747474;
        color: #FFF;

        tr {
          display: block;
          position: relative;
        }
      }

      tbody {
        display: block;
        overflow: auto;

        tr:nth-child(even) {
          background-color: #C4C4C4;
        }
      }
    }
  }
`