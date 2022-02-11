import React from 'react'
import styled from 'styled-components'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

export const App = () => {
  return (
    <StyledApp className="App">
      <Header />
      <Main />
      <Footer />
    </StyledApp>
  )
}

export default App

/*---------STYLED COMPONENTS---------- */
const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;

  background-color: #EBEBEB;
`
