import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/Netflix-Background-Image.jpeg'

export default function BackgroundImage() {
  return (
    <Container>
      <img src={backgroundImage} alt="background" />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`
