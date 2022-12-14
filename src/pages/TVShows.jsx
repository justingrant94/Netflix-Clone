import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres } from '../store'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import NotAvailable from '../components/NotAvailable'
import Slider from '../components/Slider'
import SelectGenre from '../components/SelectGenre'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../utilities/firebase-config'
// import { useNavigate } from 'react-router-dom'

export default function TVShows() {
  // const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
  const movies = useSelector((state) => state.netflix.movies)
  const genres = useSelector((state) => state.netflix.genres)
  const dispatch = useDispatch()

  // we want to run below once on the first load.
  useEffect(() => {
    // console.log('in use effect')
    dispatch(getGenres())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: 'tv' }))
  }, [genresLoaded])

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if (currentUser) navigate('/')
  })
  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>

      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  )
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`
