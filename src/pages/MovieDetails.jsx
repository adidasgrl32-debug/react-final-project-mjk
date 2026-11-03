import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '7fb7e6c5';

const MovieDetails = ({ movie }) => {
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  const [movies, setMovies] = useState([]);
  const [imdbId, setImdbId] = useState('');

  const getMovieDetails = async () => {
  const url = `http://www.omdbapi.com/?i=${imdbId}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();
    
    console.log(responseJson);
    setMovies(responseJson.MovieDetails)
  }

    useEffect(() => {
    getMovieDetails();
  }, [imdbId]);

return (
    <>
      <div className="main">
        <div className="movie-details__container">
          <Link to="/">← Back</Link>
          <div className="movie-details__back">
          </div>
      {loading 
        ? new Array(10).fill(0).map((_, index) => (
      <div className="movie-details" key={index}>
        <div className="movie-details__title">
          <div className="movie-details__title--skeleton"></div>
        </div>
        <div className="movie-details__body">
          <p className="movie-details__body--skeleton"></p>
        </div>
    </div>
      ))
      : movieDetails.map(movie => (
        <div className="movie.details" key={movie.id}>
           <div className="movie-details" key={movie.id}></div>
             <p className="movie-details__title">{movie.title}</p>
        </div>
      ))}
          <div className="movie-details__content">
            <div className="movie-details__poster--wrapper">
              <img alt="Despicable Me"
                className="movie--details__poster"
                src="https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg"
              />
            </div>
            <div className="movie-details__info">
              <h1 className="movie-details__title" key={movie?.Title}>
              </h1>
              <p className="movie-details__year">Year: 2010</p>
              <p className="movie-details__rating">
                Rating: 7.6/10
              </p>
              <p className="movie-details__released">
                Released: 2010
              </p>
            </div>
          </div>
          <div className="movie-details__text--wrappter">
            <div className="movie-details__detail">
              <h3>Genre</h3>
              <p>Genre: Animation, Adventure, Comedy</p>
            </div>
            <div className="movie-details__detail">
              <h3>Writer</h3>
              <p>Writer: Cinco Paul, Ken Daurio, Sergio Pablos</p>
            </div>
            <div className="movie-details__detail">
              <h3>Actors</h3>
              <p>Actors: Steve Carell, Jason Segel, Russell Brand </p>
            </div>
            <div className="movie-details__detail">
              <h3>Plot</h3>
              <p>Plot: Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see the evildoer as their potential father.</p>
            </div>
            <div className="movie-details__detail">
              <h3>Language</h3>
              <p>Language: English</p>
            </div>
            <div className="movie-details__detail">
              <h3>Awards</h3>
              <p>Awards: Nominated for 1 BAFTA Award. 3 wins & 41 nominations total</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;