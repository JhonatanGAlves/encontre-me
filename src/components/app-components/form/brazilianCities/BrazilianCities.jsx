import React, { useState, useEffect } from 'react'
import { fetchCitiesForStates, parseCities } from '../../../../helpers/ibge'
import StatesAndCities from '../statesAndCities/StatesAndCities'

const BrazilianCities = ({ id, name, state, onChange = () => { } }) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetchCitiesForStates(state).then(parseCities).then((cities) => {
      setCities(cities)
    })
  }, [state])

  return (
    <StatesAndCities
      id={id}
      name={name}
      data={cities}
      onChange={onChange} />
  )
}

export default BrazilianCities