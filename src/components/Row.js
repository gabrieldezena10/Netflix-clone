import React from 'react'
import { useState, useEffect } from 'react'
import { getMovies } from '../utils/API';
import '../styles/Row.css'
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

// https://developers.themoviedb.org/3/getting-started/images
const baseImgUrl = 'https://image.tmdb.org/t/p/w500'

function Row({ title, path, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const fetchMovies = async(_path) => {
    try {
      const data = await getMovies(_path);
      console.log('data', data);
      setMovies(data?.results);
    } catch (error) {
      console.log('fetchMovies error', error);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path])
  
 const handleOnClick = async (movie) => {
  if (trailerUrl) {
    setTrailerUrl('')
  } else {
    const url = await movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
    setTrailerUrl(url);
  }
 }

  return (
    <div className='row-container'>
      <h2 className='row-header'>{title}</h2>
      <div className='row-cards'>
        {movies?.map(movie => {
          return(
            <img 
            className={`movie-card ${isLarge && 'movie-card-large'}`}
            onClick={() => handleOnClick(movie)}
            alt={movie.name} 
            key={movie.id} 
            src={`${baseImgUrl}${isLarge ? movie.backdrop_path : movie.poster_path}`}></img>
          )
        })}
      </div>
      {trailerUrl && <ReactPlayer url={trailerUrl} controls={true} playing={true}/>}
    </div>
  );
}

export default Row