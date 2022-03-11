import React, { useState, useEffect } from 'react'
import { fetchStates, parseStates } from '../../../../helpers/ibge'
import StatesAndCities from '../statesAndCities/StatesAndCities'

const BrazilianStates = ({ id, name, onChange = () => { } }) => {
  const [states, setStates] = useState([])

  useEffect(() => {
    fetchStates().then(parseStates).then(setStates)
  }, [])

  return (
    <StatesAndCities
      id={id}
      name={name}
      data={states}
      onChange={onChange} />
  )
}

export default BrazilianStates