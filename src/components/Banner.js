import React from 'react'
import { useState, useEffect } from 'react'
import categories, { getMovies } from '../utils/API'
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
}, []);


function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}

  return (
    <header className='banner-container' style={{
      backgroundSize: 'cover',
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'`,
      roundPosition: 'center-center'
    }}>
      <div className='banner-content'>
        <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner-button-container'>
          <button className='banner-button'>Assistir</button>
          <button className='banner-button'>Minha Lista</button>
        </div>

        <div className='banner-description'>
          <h3>{truncate(movie?.overview, 150)}</h3>
        </div>
      </div>
    </header>
  )
}

export default Banner