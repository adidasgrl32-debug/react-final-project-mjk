import React from 'react';

const MovieCard = ({ movie }) => {
  if (!movie) {
    return null;
  }

  return (
    <div id="movieDetails" className="movieDetails">
      <div className="movieDetails__poster">
        <img
          className="movieDetails__poster-img"
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}'}
          alt={movie.Title}
        />
      </div>
      <div className="movieDetails__info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;