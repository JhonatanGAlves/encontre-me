import React from 'react'
import styled from 'styled-components'
import Footer from '../components/app-components/Footer'
import Header from '../components/app-components/Header'
import Main from '../components/app-components/Main'
import { Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={
        <StyledApp className="App">
          <Header />
          <Main />
          <Footer />
        </StyledApp>
      } />
    </Routes>
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
