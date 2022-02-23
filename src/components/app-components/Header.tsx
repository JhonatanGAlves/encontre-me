import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import IconImg from '../../assets/images/icon-user.png'

export const Header = () => {

  return (
    <ContainerHeader className='container-header'>
      <ContentHeader>
        <a className='left-header' href='/'>
          <div className='logo-header'>
            <h3>encontre-me</h3>
            <hr style={{ margin: '0' }} />
            <p>projeto voluntário em prol de pessoas desaparecidas</p>
          </div>
        </a>
        <div className='right-header'>
          <ul className='nav-list'>
            <li><Link to='/'>início</Link></li>
            <li><a href='#about'>sobre</a></li>
            <li><Link to='/casos-registrados'>casos registrados</Link></li>
            <li><a href='/'>central de notícias</a></li>
            <li><a style={{ textTransform: 'none' }} href='/'>FAQs</a></li>
          </ul>
          <a className='header-user' href='/'>
            <img src={IconImg} alt="Imagem de usuário" />
          </a>
        </div>
      </ContentHeader>
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;

  background-color: #00000030;
`
const ContentHeader = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 1465px;
  max-width: 1465px;
  min-width: 320px;

  .left-header {
    text-decoration: none;

    color: #FFF;
  }

  .logo-header {

    h3 {
      margin: 0;
      text-align: center;
      font-size: 45px;
      font-weight: 900;
      text-transform: uppercase;

      color: #FFF;
    }

    hr {
      margin-left: 6px !important;
      width: 321px;
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
    align-items: center;

    .nav-list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
  
      li {
        margin-left: 5px;
      }
  
      a {
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px 15px;
        border-radius: 5px;
        transition: 0ms.1s;
  
        color: #FFF;
  
        &:hover {
          background-color: #00000030;
        }
  
        &:active {
          color: #7393C0;
        }
      }
    }

    .header-user {
      margin-left: 15px;

      img {
        width: 30px;
      }
    }
  }

  `