import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div id="movieDetails" className="movieDetails">
      <div className="movieDetails__poster">
        <img
          className="movieDetails__poster-img"
          src={movie.Poster}
          alt={movie.Title}
        />
      </div>
    </div>
  );
};

export default MovieDetails;