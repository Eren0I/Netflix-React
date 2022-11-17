import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios/axios'
import requests from '../../axios/Requests'

const Banner = () => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending)
      setMovie(
        request.data.results[
          Math.ceil(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])

  function truncate(string, n){
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
        }
  return (
    <header className="banner" style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center"
      
    }} >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.name || movie.original_name || movie.title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(`${movie.overview} `, 100)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner