import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PosterImage from '../components/PosterImage';

const API_KEY = '7fb7e6c5';

const MovieDetails = () => {
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

  if (movie.Response === 'False') {
  return <p>{movie.Error}</p>;
}

return (
    <>
      <div className="main">
        <div className="movie-details__container">
          <Link to="/">← Back</Link>
          <div className="movie-details__back">
          </div>
          <div className="movie-details__content">
            <div className="movie-details__poster--wrapper">
             <PosterImage
              src={movie.Poster !== 'N/A' ? movie.Poster : ''}
              alt={`${movie.Title} poster`}
              className="movie-card__img"
              placeholderClassName="movie-card__poster-placeholder"
            />
            </div>
            <div className="movie-details__info">
              <h1 className="movie-details__title">{movie.Title}
              </h1>
              <p className="movie-details__year">{movie.Year}</p>
              <p className="movie-details__rating">
                {movie.imdbRating}
              </p>
              <p className="movie-details__released">
                {movie.Released}
              </p>
            </div>
          </div>
          <div className="movie-details__text--wrapper">
            <div className="movie-details__detail">
              <h3>Genre</h3>
              <p>{movie.Genre}</p>
            </div>
            <div className="movie-details__detail">
              <h3>Writer</h3>
              <p>{movie.Writer}</p>
            </div>
            <div className="movie-details__detail">
              <h3>Actors</h3>
              <p>{movie.Actors} </p>
            </div>
            <div className="movie-details__detail">
              <h3>Plot</h3>
              <p>{movie.Plot}</p>
            </div>
            <div className="movie-details__detail">
              <h3>Language</h3>
              <p>{movie.Language}</p>
            </div>
            <div className="movie-details__detail">
              <h3>Awards</h3>
              <p>{movie.Awards}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;