import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

import BackgroundImage from '../assets/BackgroundImage.jpeg'

import MovieLogo from '../assets/MovieLogo.png'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres } from '../store'

export default function Netflix() {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
  const movies = useSelector((state) => state.netflix.movies)

  const dispatch = useDispatch()

  // we want to run below once on the first render, first load.
  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: 'all' }))
  }, [genresLoaded])

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  // console.log(movies)

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={BackgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>

          {/* Button Flex */}
          <div className="buttons flex">
            <button
              className="flex j-center a-center"
              onClick={() => navigate('/player')}
            >
              <FaPlay /> Play
            </button>

            <button className="flex j-center a-center">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
      {/* importing component file */}
      <Slider movies={movies} />
    </Container>
  )
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      width: 100vw;
      height: 100vh;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: auto;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 2rem;
        gap: 2rem;
        button {
          font-size: 1.5rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          // second button of type - will be grey
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`
