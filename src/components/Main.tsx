import React from 'react'
import styled from 'styled-components'
import BgBanner from '../assets/images/background-main-banner.png'
import ImgBanner from '../assets/images/isac-manoel-domingues.png'
import Button from './Button'

export const Main = () => {
  return (
    <StyledMain>
      <div className='banner-main'>
        <div className='content-banner'>
          <div className='txt-buttons-banner'>
            <h1>registre seu caso ou seja<br />
              mais um <style color='#7393C0'>anjo</style> espalhado<br />
              pelo mundo!
            </h1>
            <Buttons>
              <Button
                value='ser um anjo'
                width='200px'
                bgColor='transparent'
                color='#7393C0'
                border='2px solid #7393C0'
              />
              <Button
                value='novo caso'
                width='200px'
                bgColor='transparent'
                color='#7393C0'
                border='2px solid #7393C0'
              />

            </Buttons>
          </div>
        </div>
      </div>
    </StyledMain>
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
    
    .content-banner {
      margin: auto;
      width: 1450px;
      max-width: 1450px;
      padding: 200px 0;

      .txt-buttons-banner {
        display: flex;
        flex-direction: column;
        justify-content: left;

        h1 {
          font-size: 48px;
          text-transform: uppercase;
        }
      }
    }
  }
`
const Buttons = styled.div`
  display: flex;
`