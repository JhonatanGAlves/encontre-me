import React from 'react'
import styled from 'styled-components'
import Footer from '../components/app-components/Footer'
import Header from '../components/app-components/Header'
import Main from '../components/app-components/Main'

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
  box-sizing: border-box;

  background-color: #EBEBEB;
`
