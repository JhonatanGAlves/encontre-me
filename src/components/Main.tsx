import React from 'react'
import styled from 'styled-components'
import BgBanner from '../assets/images/background-main-banner.png'
import ImgBanner from '../assets/images/isac-manoel-domingues.png'

export const Main = () => {
  return (
    <StyledMain>
      <div className='banner-main'>
        <div className='content-banner'>
          <div className='txt-buttons-banner'>
            <h1>registre seu caso ou seja<br />
              mais um <span style={{ color: '#7393C0' }}>anjo</span> espalhado<br />
              pelo mundo!
            </h1>
            <p>Ao se cadastrar como um <strong>anjo</strong>, quando alguém entrar com um <strong>novo caso</strong>,<br />
              você receberá automaticamente todos os dados do desaparecido,<br />
              nome completo, foto, idade, data, local do desaparecimento e<br />
              alguma observação relevante.<br /><br />

              Clique em <strong>SER UM ANJO</strong> ou, se tiver algum caso, clique em <strong>NOVO CASO</strong>.
            </p>
            <Buttons>
              <a href='#'>
                <button className='anjo-button'>ser um anjo</button>
              </a>
              <a href='#'>
                <button className='caso-button'>novo caso</button>
              </a>
            </Buttons>
          </div>
        </div>
      </div>
    </StyledMain >
  )
}

export default Main

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 100vw;

  .banner-main {
    background-image: url(${BgBanner});
    background-repeat: no-repeat;
    background-size: cover;
    
    overflow: hidden;
    width: 100%;
    height: auto;
    margin-top: -60px;
    
    .content-banner {
      margin: auto;
      width: 1450px;
      max-width: 1450px;
      padding: 260px 0 100px 0;

      .txt-buttons-banner {
        display: flex;
        flex-direction: column;
        justify-content: left;

        h1 {
          font-size: 48px;
          text-transform: uppercase;

          color: #FFF;
        }

        p {
          font-size: 21px;
          font-weight: 300;

          color: #FFF;
        }
      }
    }
  }
`
const Buttons = styled.div`
  display: flex;

  a {
    margin: 20px 20px 45px 0;

    button {
      width: 300px;
      height: 50px;
      padding: 5px 10px;
      border-radius: 10px;
      border: none;
      font-size: 21px;
      font-weight: 600;
      text-transform: uppercase;
      cursor: pointer;

      color: #FFF;
      background-color: #7393C0;

      &:hover {
        background-color: #78a5e6;
        color: #FFF;
      }
    }
  }
`