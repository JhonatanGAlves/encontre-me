import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'

export const App = () => {
  return (
    <StyledApp className="App">
      <Header />
      <Main />
    </StyledApp>
  )
}

export default App

/*---------STYLED COMPONENTS---------- */
const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;

  color: #CCC;
`
