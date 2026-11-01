import React from 'react';

const MovieCard = () => {
  const displayMovies = (movies) => {
  if (!moviesGrid || !Array.isArray(movies)) return;

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

  moviesGrid.innerHTML = movieResults;
};
	return (
    <div>

      </div>
  );
}

export default MovieCard;