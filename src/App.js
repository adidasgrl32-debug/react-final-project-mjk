import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';
import SearchMovies from './pages/SearchMovies';


function App() {
  const moviesGrid = document.getElementById('moviesGrid');
  const currentMovies = [];

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

function sortMovies(sortType, movies) {
  let sortedMovies = [...movies];

  if (sortType === "default") {
    return sortedMovies;
  }

  if (sortType === "a to z") {
    sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (sortType === "z to a") {
    sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
  } else if (sortType === "newest") {
    sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  } else if (sortType === "oldest") {
    sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
  }

  return sortedMovies;
}
 
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<SearchMovies sortMovies={sortMovies} />}></Route>
          <Route path="/moviedetails/:id" element={<MovieDetails />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
