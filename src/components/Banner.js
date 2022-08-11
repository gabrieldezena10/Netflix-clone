import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import categories, { getMovies } from '../API'
import '../styles/Banner.css'

function Banner() {

const [movie, setMovie] = useState([])

const fetchRandomMovie = async() => {
  try {
    const data = await getMovies(categories.find(category => category.name === 'netflixOriginals').path);
    const randomIndex = Math.floor(Math.random() * data.results.length);
    setMovie(data?.results[randomIndex]);
  } catch (error) {
    console.log(('Banner fetchRandomMovie error', error));
  }
}

useEffect = (() => {
  fetchRandomMovie()
}, []);

  return (
    <div>Banner</div>
  )
}

export default Banner