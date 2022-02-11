import React from 'react'
import styled from 'styled-components'
import ManBlueLight from '../assets/images/homem-silhueta-azul-claro1.png'
import KidBlueDark from '../assets/images/homem-silhueta-azul-mid1.png'
import WomanBlueLight from '../assets/images/silhueta-negra-em-pe-de-mulher1.png'

export const CaseNumber = () => {
  return (
    <StyledCaseNumber>
      <div className='case-txt'>
        <h2>números de <strong>casos no brasil</strong></h2>
      </div>
      <div className='content-case-main'>
        <div className='content-case-left'>
          <img className='kid-blue-dark' src={KidBlueDark} alt="" />
          <img className='woman-blue-dark' src={WomanBlueLight} alt="" />
          <img className='man-blue-dark' src={ManBlueLight} alt="" />
        </div>
        <div className='content-case-right'>
          <h3>De acordo com o Anuário Brasileiro de Segurança Pública de 2021,
            divulgado no mês de julho, o número de pessoas desaparecidas
            no Brasil no ano passado foi de 62.857. Em São Paulo, Estado com
            maior registro de casos, a taxa foi reduzida em 15% em
            comparação ao ano anterior, mas o número de 18.342
            desaparecidos ainda é preocupante.
          </h3>
          <div className='case-data'>
            <div className='case-data-content'>
              <span className='desaparecidos-data'>62.857<br />
                <span>desaparecidos</span>
              </span>
              <span className='por-dia-data'>172<br />
                <span>por dia</span>
              </span>
            </div>
          </div>
        </div>
      </div>

    </StyledCaseNumber>
  )
}

export default CaseNumber

const StyledCaseNumber = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1465px;
  max-width: 1465px;
  padding: 50px 0 115px 0;

  .case-txt {
    padding-bottom: 50px;

    h2 {
      text-transform: uppercase;
      font-weight: 300;
      font-size: 48px;

      color: #78a5e6;
    }
  }

  .content-case-main {
    display: flex;
    justify-content: center;
    width: 1465px;
    max-width: 1465px;

    .content-case-left {
      display: flex;
      justify-content: center;
      padding: 20px 0;
      width: 725px;

      .kid-blue-dark {
        position: relative;
        left: 70px;
        top: 102px;
        height: 150px;
      }

      .man-blue-dark {
        position: relative;
        right: 85px;
      }
    }

    .content-case-right {
      display: grid;
      width: 725px;

      h3 {
        font-size: 21px;
        font-weight: 300;

        color: #747474;
      }

      .case-data {
        display: flex;
        justify-content: center;
        margin-top: 20px;

        .case-data-content {
          display: flex;
          height: 105px;

          .desaparecidos-data {
            font-size: 64px;
            font-weight: 900;
            margin-right: 30px;
            padding-left: 10px;
            border-radius: 10px 0 0 10px;

            color: #747474;
            border-left: 20px solid #78a5e6;

            span {
              font-size: 21px;
              position: relative;
              top: -45px;
              font-weight: 300;
            }
          }
  
          .por-dia-data {
            font-size: 64px;
            font-weight: 900;
            margin-left: 30px;
            padding-left: 10px;
            border-radius: 10px 0 0 10px;

            color: #747474;
            border-left: 20px solid #78a5e6;

            span {
              font-size: 21px;
              position: relative;
              top: -45px;
              font-weight: 300;
            }
          }
        }

      }
    }
  }

`