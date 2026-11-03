import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const API_KEY = '7fb7e6c5';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

const getMovieDetails = async () => {
  const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
  const data = await response.json();
  setMovie(data);
};

useEffect(() => {
  getMovieDetails();
}, [id]);

 if (!movie) {
    return <div>Loading movie details...</div>
  }

return (
    <>
      <div className="main">
        <div className="movie-details__container">
          <Link to="/">← Back</Link>
          <div className="movie-details__back">
          </div>
      {loading ? (
        new Array(10).fill(0).map((_, index) => (
          <div className="movie-details" key={index}>
            <div className="movie-details__title">
              <div className="movie-details__title--skeleton"></div>
            </div>
            <div className="movie-details__body">
              <p className="movie-details__body--skeleton"></p>
            </div>
          </div>
        ))
            ) : movieDetails.map(movie => (
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
              <h1 className="movie-details__title">{movie.title}
              </h1>
              <p className="movie-details__year">{movie.year}</p>
              <p className="movie-details__rating">
                {movie.rating}
              </p>
              <p className="movie-details__released">
                {movie.released}
              </p>
            </div>
          </div>
          <div className="movie-details__text--wrappter">
            <div className="movie-details__detail">
              <h3>Genre</h3>
              <p>{movie.genre}</p>
            </div>
            <div className="movie-details__detail">
              <h3>Writer</h3>
              <p>{movie.writer}</p>
            </div>
            <div className="movie-details__detail">
              <h3>Actors</h3>
              <p>{movie.actors} </p>
            </div>
            <div className="movie-details__detail">
              <h3>Plot</h3>
              <p>{movie.plot}</p>
            </div>
            <div className="movie-details__detail">
              <h3>Language</h3>
              <p>{movie.language}</p>
            </div>
            <div className="movie-details__detail">
              <h3>Awards</h3>
              <p>{movie.awards}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;