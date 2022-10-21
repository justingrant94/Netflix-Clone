import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/logo.jpeg'

export default function BackgroundImage() {
  return (
    <Container>
      <img src={backgroundImage} alt="background" />
    </Container>
  )
}

const Container = styled.div``
