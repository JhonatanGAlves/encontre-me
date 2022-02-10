import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import ImgIsac from '../assets/images/isac-manoel-domingues.png'
import BgAbout from '../assets/images/background-sobre.png'
import WhatsIcon from '../assets/images/whatsapp-icon.png'
import GmailIcon from '../assets/images/gmail-icon.png'


export const AboutUs = () => {
  moment.locale('pt-BR')
  const currentGone = moment("01012004", "DDMMYYYY").fromNow(true)
  const currentYear = moment("02081986", "DDMMYYYY").fromNow(true)


  return (
    <StyledAboutUs>
      <div className='about-txt'>
        <h2>sobre <strong>nós</strong></h2>
      </div>
      <div className='content-about-main'>
        <div className='about-main-left'>
          <h3>Esse, da imagem ao lado, é o <strong>ISAC MANOEL DOMINGUES</strong>,
            da cidade de Areiópolis, interior do estado de São Paulo, ele é <strong>SURDO </strong>
            e faz {currentGone} anos que está <strong>desaparecido</strong>. Desapareceu no dia 01/04/2004,
            com 17 anos, atualmente com {currentYear}.<br /><br />

            Ele é o motivo pelo qual este site existe, pois no dia do desaparecimento
            foi feito a ocorrência pelos pais na delegacia, porém, disseram ao pais
            que teriam que aguardar 24 horas para que eles (policiais) começassem
            a procurar por ele.<br /><br />

            Se a ação de procurar tivesse sido de imediato, talvez hoje a história
            poderia ser outra...<br /><br />

            <strong><i>Caso REALMENTE tenha alguma informação sobre o caso, entre em contato
              por favor, através:</i></strong>
          </h3>
          <div className='about-icons'>
            <div className='whats-icon'>
              <img src={WhatsIcon} alt='Ícone do WhatsApp' />
              <span><a href='https://api.whatsapp.com/send?phone=5514991725235&text=Olá, tudo bem? Vim através do site Encontre-me | Desaparecidos' target='_blank' rel="noreferrer">(14) 99172-5235</a>
              </span>
            </div>
            <div className='gmail-icon'>
              <img src={GmailIcon} alt='Ícone do Gmail' />
              <span><a href='mailto:contato.isacmanoel@gmail.com' target='_blank' rel="noreferrer">contato.isacmanoel@gmail.com</a>
              </span>
            </div>
          </div>
        </div>
        <div className='about-main-right'>
          <img src={ImgIsac} alt='Isac Manoel Domingues' />
        </div>
      </div>
      <div className='about-how'>
        <h2>como <strong>funciona?</strong></h2>
        <h3>Pensando nisso, decidimos criar uma plataforma web, onde, qualquer pessoa
          pode se cadastrar para receber novos casos de desaparecimento ou, até
          mesmo, casos antigos. Essas pessoas são chamadas de "anjos", pois ao se
          cadastrar, a cada novos casos de desaparecimento cadastrados na
          plataforma, ela recebe em seu WhatsApp ou SMS, as informações do desaparecido,
          juntamento da foto, assim, ela passa a ser mais um olho voltado à procura
          do ser desaparecido.
        </h3>
        <a href='/'>
          <button className='access-button'>acessar todos os casos</button>
        </a>
      </div>

    </StyledAboutUs>
  )
}

export default AboutUs

const StyledAboutUs = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 0 115px 0;
  background-image: url(${BgAbout});
  background-repeat: no-repeat;
  background-size: cover;

  .about-txt {
    padding-bottom: 50px;

    h2 {
      text-transform: uppercase;
      font-weight: 300;
      font-size: 48px;

      color: #78a5e6;
    }
  }

  .content-about-main {
    display: flex;
    width: 1450px;
    max-width: 1450px;

    .about-main-left {
      width: 1000px;
      
      h3 {
        font-size: 21px;
        font-weight: 300;
  
        color: #747474;
      }

      .about-icons {

        .whats-icon {
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          span {
            margin-left: 10px;
            font-size: 21px;
            font-weight: 300;

            a {
              text-decoration: none;

              color: #747474;
            }
          }
        }

        .gmail-icon {
          display: flex;
          align-items: center;

          span {
            margin-left: 10px;
            font-size: 21px;
            font-weight: 300;
  
            a {
              text-decoration: none;

              color: #747474;
            }
          }
        }
      }
    }

    .about-main-right {
      margin: auto;
    }
  }

  .about-how {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 1450px;
    max-width: 1450px;

    h2 {
      text-transform: uppercase;
      font-weight: 300;
      font-size: 48px;
      margin: 10px 0 20px 0;

      color: #78a5e6;
    }

    h3 {
      font-size: 21px;
      font-weight: 300;
      width: 1000px;
      margin: 0;

      color: #747474;
    }

    a {
      margin: 40px 20px 45px 0;

      button {
        width: 400px;
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
  }
`