import React from 'react';
import MovieCard from '../components/ui/MovieCard';

const MovieDetails = () => {

  return (
    <>
    <div className="movie-details__container">
      <div className="movie-details__back">
        <a href="/" className="movie-details__back-link">
          Back</a>
      </div>
      <div className="movie-details__info">
        <h1 className="movie-details__title">Title</h1>
        <p className="movie-details__year">Year</p>
        <p className="movie-details__rating">Ratings</p>
        <p className="movie-details__released">Released</p>
      </div>
    </div>
      <div className="movie-details__text--wrappter">
        <div className="movie-details__detail">
          <h3>Genre</h3>
          <p>Genre</p>
        </div>
        <div className="movie-details__detail">
          <h3>Writer</h3>
          <p>Writer</p>
        </div>
        <div className="movie-details__detail">
          <h3>Actors</h3>
          <p>Actors</p>
        </div>
        <div className="movie-details__detail">
          <h3>Plot</h3>
          <p>Plot</p>
        </div>
        <div className="movie-details__detail">
          <h3>Language</h3>
          <p>Language</p>
        </div>
          <div className="movie-details__detail">
            <h3>Awards</h3>
            <p>Awards</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;