import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import supabase from '../../client'

const MoreInformationModal = (props) => {
  const [casesList, setCasesList] = useState([])

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

  return (
    <>
      {props.open &&
        <StyledInformationModal>
          <StyledContentModal>
            {casesList.map(
              (cases) => (
                <div className='content-header'>
                  <span className='header-left'>
                    <h4>{cases.nome_completo}</h4>
                  </span>
                  <div className='header-right'>
                    <div className="close-button-area">
                      <button
                        className='btn link'

                      >
                        <i className='far fa-times' />
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </StyledContentModal>
        </StyledInformationModal>
      }
    </>
  )
}

export default MoreInformationModal

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