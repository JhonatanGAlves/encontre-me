import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <ContainerHeader>
      <ContentHeader>
        <div className='left-header'>
          <h3>encontre-me</h3>
          <hr style={{ margin: '0' }} />
          <p>projeto voluntário em prol de pessoas desaparecidas</p>
        </div>
        <div className='right-header'>
          <ul className='menu-header'>
            <li><a href='#'>início</a></li>
            <li><a href='#'>sobre</a></li>
            <li><a href='#'>casos registrados</a></li>
            <li><a href='#'>central de notícias</a></li>
            <li><a style={{ textTransform: 'none' }} href='#'>FAQs</a></li>
          </ul>
        </div>
      </ContentHeader>
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 120px;

  background-color: #00000030;
`
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1450px;
  max-width: 1450px;

  .left-header {
    display: block;
    justify-content: center;
    align-items: center;
    width: 335px;

    h3 {
      margin: 0;
      text-align: center;
      font-size: 45px;
      font-weight: 900;
      text-transform: uppercase;

      color: #FFF;
    }

    p {
      margin: 5px;
      text-align: center;
      font-size: 10.5px;
      font-weight: 600;
      text-transform: uppercase;

      color: #FFF;
    }
  }

  .right-header {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 1115px;
    max-width: 1115px;

    ul {
      display: flex;
      list-style: none;

      li {
        margin: 0 15px;

        a {
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          text-decoration: none;

          color: #FFF;

          &:hover {
            padding-bottom: 10px;
            text-decoration: underline;
          }
        }
      }
    }
  }
`