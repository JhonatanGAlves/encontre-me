import React, { useState, useEffect, useMemo, useCallback } from 'react'
import styled from 'styled-components'
import Header from '../components/app-components/Header'
import supabase from '../client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faTable, faClosedCaptioning } from '@fortawesome/free-solid-svg-icons'
import BrazillianStates from '../components/app-components/form/brazilianStates/BrazilianStates'
import BrazilianCities from '../components/app-components/form/brazilianCities/BrazilianCities'


export const RegisteredCases = () => {
  const [casesList, setCasesList] = useState([])
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const [nameMother, setNameMother] = useState('')
  const [nameFather, setNameFather] = useState('')
  const [formValues, setFormValues] = useState({})
  const [open, setOpen] = useState(false)
  const openModal = useCallback(() =>
    setOpen(open => !open)
    , [])

  const handleInputChange = (e) => {
    e.preventDefault()
    const { value, name } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const searchName = (e) => {
    setSearch(e.target.value)
    setName(e.target.value)
  }

  const searchNameMother = (e) => {
    setSearch(e.target.value)
    setNameMother(e.target.value)
  }

  const searchNameFather = (e) => {
    setSearch(e.target.value)
    setNameFather(e.target.value)
  }

  useEffect(() => {
    fetchCases()
  }, [])

  async function fetchCases() {
    const { data } = await supabase
      .from('cases_list')
      .select('*')
    setCasesList(data)
    console.log('cases', data)
  }

  const filteredCases = useMemo(() => {
    if (casesList) {
      return casesList.filter(
        (cases) =>
          cases.nome_completo.toLowerCase().includes(search.toLowerCase()) ||
          cases.nome_mae.toLowerCase().includes(search.toLowerCase()) ||
          cases.nome_pai.toLowerCase().includes(search.toLowerCase())
        // cases.estado.toLowerCase().includes(search.toLowerCase()) ||
        // cases.cidade.toLowerCase().includes(search.toLowerCase())
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
              <label htmlFor='select-states'>Estado:</label>
              <BrazillianStates
                id='select-states'
                name='state'
                onChange={handleInputChange}
              />
              <label htmlFor='select-cities'>Morador da Cidade de:</label>
              <BrazilianCities
                id='select-cities'
                name='city'
                state={formValues.state}
                onChange={handleInputChange} />
              <label htmlFor='select-sexo'>Sexo</label>
              <select id='select-sexo' className='select-field'>
                <option value='selected-sexo'>Selecione...</option>
              </select>
            </form>
          </div>
        </div>
        <div className='content-right'>
          <div className='title-icon'>
            <h2>casos registrados</h2>
            <FontAwesomeIcon icon={faTable} />
          </div>
          <table className='table table-with-description'>
            <thead>
              <tr>
                <td className='case-id'>ID Caso</td>
                <td>Postado em</td>
                <td>Nome Completo</td>
                <td>Desapareceu em</td>
                <td>Cidade do Desaparecimento</td>
                <td className='case-state'>Estado</td>
                <td>Morava em</td>
                <td>Data de Nascimento</td>
                <td>Sexo</td>
                <td>Nome da Mãe</td>
                <td>Nome do Pai</td>
                <td>Contato</td>
                <td>Informações Relevantes</td>
                <td className='click-here'>Saiba Mais</td>
              </tr>
            </thead>
            <tbody>
              {filteredCases.map((cases) => (
                <tr key={cases.id}>
                  <td className='case-id'>{cases.id}</td>
                  <td>{cases.data_postagem}</td>
                  <td>{cases.nome_completo}</td>
                  <td>{cases.data_desaparecimento}</td>
                  <td>{cases.cidade_desaparecimento}</td>
                  <td className='case-state'>{cases.estado}</td>
                  <td>{cases.cidade}</td>
                  <td>{cases.data_nascimento}</td>
                  <td>{cases.sexo}</td>
                  <td>{cases.nome_mae}</td>
                  <td>{cases.nome_pai}</td>
                  <td>{cases.contato}</td>
                  <td>{cases.informacoes_relevantes}</td>
                  <td className='click-here'>

                    <FontAwesomeIcon icon={faAddressCard} onClick={openModal} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {open &&
            <StyledInformationModal open={open}>
              <StyledContentModal>
                <div className='content-header'>
                  <span className='header-left'>
                    <h4>{casesList.nome_completo}</h4>
                  </span>
                  <div className='header-right'>
                    <div className="close-button-area">
                      <button
                        className='btn link'
                        onClick={openModal}
                      >
                        <FontAwesomeIcon icon={faClosedCaptioning} />
                      </button>
                    </div>
                  </div>
                </div>
              </StyledContentModal>
            </StyledInformationModal>
          }
        </div>
      </main>
    </StyledRegisteredCases>
  )
}

export default RegisteredCases

const StyledRegisteredCases = styled.section`
  position: relative;
  min-height: 100%;
  box-sizing: border-box;

  background-color: #EBEBEB;

  .container-header {
    position: unset;

    background-color: #3F5F8B;
  }

  .container-main-cases {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 95%;
    padding: 50px 0;

    .content-left {
      padding: 0 15px 0;
      z-index: 5;

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
          background-color: #3F5F8B;

          &:hover {
            background-color: #4d7ab9;
          }
        }
      }

      .container-quick-search {
        padding: 20px;
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
        }
      }
    }

    .content-right {
      background-color: #FFF;
      box-shadow: 0 16px 16px -8px #00000025;
      padding: 20px;

      .title-icon {
        display: flex;
        align-items: center;

        svg {
          position: relative;
          top: -5px;
          font-size: 29px;
          margin-left: 15px;
          color: #3F5F8B;
        }
      }

      h2 {
        margin: 0 0 20px 0;
        font-size: 48px;
        text-transform: capitalize;

        color: #747474;
      }

      table {
        table-layout: fixed;
        border-collapse: collapse;
        width: 100%;
        max-width: 100%;

        color: #747474;
        background-color: transparent;

        td {
          padding: 5px;
          font-size: 14px;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .case-id {
          width: 50px;
        }

        .case-state {
          width: 50px;
        }

        .click-here {
          text-align: center;
        }

        /* td:nth-child(1), th:nth-child(1) { min-width: 200px; }
        td:nth-child(2), th:nth-child(2) { min-width: 200px; }
        td:nth-child(3), th:nth-child(3) { width: 350px; } */
      }
      
      thead {
        width: 100%;
        border: 1px solid #747474;
        border-radius: 5px;

        background-color: #c4c4c4;
        color: #FFF;

        td {
          text-align: left;
          font-weight: 600;
        }
      }

      tbody {
        border: 1px solid #747474;

        tr {
          border-bottom: 1px solid #C4C4C4;

          &:hover {
            background-color: #EBEBEB;
          }
        }

        .case-id {
          border-right: 1px solid #C4C4C4;
          background-color: #3F5F8B;
          color: #FFF;
        }

        .click-here {
          border-left: 1px solid #C4C4C4;

          svg {
            cursor: pointer;
            font-size: 20px;
  
            color: #3F5F8B;
  
            &:hover {
              color: #4d7ab9;
            }
          }
        }
        

        /* tr:nth-child(even) {
          background-color: #C4C4C4;
        } */
      }
    }
  }
`

const StyledInformationModal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;

  background-color: #28334a20;
`
const StyledContentModal = styled.aside`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 677px;
  max-width: 677px;
  height: 798px;
  line-height: 1rem;
  border-radius: 5px;

  background-color: red;
`