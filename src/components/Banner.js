import React from 'react'
import { useState, useEffect } from 'react'
import categories, { getMovies } from '../API'
import '../styles/Banner.css'

function Banner() {

const [movie, setMovie] = useState([])

const fetchRandomMovie = async() => {
  try {
    const data = await getMovies(categories.find((category) => category.name === 'netflixOriginals').path);
    const movies = data?.results;
    const randomIndex = Math.floor(Math.random() * data.results.length);
    setMovie(movies[randomIndex]);
  } catch (error) {
    console.log(('Banner fetchRandomMovie error', error));
  }
}

useEffect(() => {
  fetchRandomMovie();
}, [])



  return (
    <header className='banner-container' style={{
      backgroundSize: 'cover',
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'`,
      roundPosition: 'center-center'
    }}>
      <div className='banner-content'>
      <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
      <div className='banner-button'>Assistir</div>
      <div className='banner-button'>Minha Lista</div>
      <div className='banner-description'></div>
      </div>
    </header>
  )
}

export default Banner