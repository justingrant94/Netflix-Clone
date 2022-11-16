import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

import video from '../assets/videos.mp4'

export default function Player() {
  const nav = useNavigate()

  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => nav(-1)} />
        </div>
        <video src={video} autoplay loop controls muted></video>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`
