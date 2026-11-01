import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
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

if (sortSelect) {
  sortSelect.addEventListener("change", (event) => {
    sortMovies(event.target.value);
  });
}

function sortMovies(sortType) {
  let sortedMovies = [...currentMovies];

  if (sortType === "default") {
    return displayMovies(sortedMovies);
  }

  if (sortType === "a to z") {
    sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (sortType === "z to a") {
    sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
  } else if (sortType === "newest") {
    sortedMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
  } else if (sortType === "oldest") {
    sortedMovies.sort((a, b) => Number(a.Year) - Number(b.Year));
  }

  return displayMovies(sortedMovies);
}

function filterMovies(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredMovies = currentMovies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchTerm),
  );
  displayMovies(filteredMovies);
}

	return (
  <>
  <Layout />
  <main>
  </main>
  </>
  );
}

export default Home;