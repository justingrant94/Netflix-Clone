import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'

export default function Signup() {
  return (
    <Container>
      <BackgroundImage />
      <Header />
      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </div>

        {/* form section of the form containing form. */}

        <div className="form">
          <input type="email" placeholder="Email Address" name="email" />
          <button>Get Started</button>
        </div>
      </div>
    </Container>
  )
}

// renamed Container instead of div
const Container = styled.div``
