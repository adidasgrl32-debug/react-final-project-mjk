import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieCard = ( { movie, movies }) => {
  const moviesGrid = document.getElementById('movies__grid');

  const displayMovies = (movie) => {
  if (!moviesGrid || !Array.isArray(movie)) return;
  }

  const movieResults = movies
    .map((movie) => {
      const poster = movie.Poster !== "N/A" ? movie.Poster : "";

      return `<div class="movie-card">
      ${poster ? `<img class="movie-card__img" src="${poster}" alt="${movie.Title}" />` : '<div class="movie-card__poster-placeholder">No Image</div>'}
      <h2 class="movie-card__title">${movie.Title}</h2>
      <p class="movie-card__year">${movie.Year}</p>
    </div>
  `;
    })
    .join("");

	return (
  <div id="movieCard__body">
      <main id="movies__main">
        <div className="movies__container">
          <div className="row">
          <div className="movieCard__selected--top">
            <Link to="/movies" className="movieCard__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
              <Link to="/movies" className="movieCard__link">
                <h2 className="movieCard__selected--title--top">Movies</h2>
              </Link>
          </div>
          <div className="movieCard__selected">
            <figure className="movieCard__selected--figure">
               <img 
               src={movie.Poster} 
               alt={movie.Title} 
               className="movieCard__selected--img" />
            </figure> 
          <div className="movieCard__selected--description">
            <h2 className="movieCard__selected--title">
              {movie.Title}
            </h2>
            <p className="movieCard__selected--year">
              {movie.Year}
            </p>
          </div>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
}

export default MovieCard;