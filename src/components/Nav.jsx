import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fesLogo from '../assets/fes-logo (3).png';

const API_KEY = '7fb7e6c5';

const Skeletons = () => (
  Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="movie-card skeleton">
      <div className="movie-card__img skeleton__img" />
      <h2 className="movie-card__title skeleton__title" />
      <p className="movie-card__year skeleton__year" />
    </div>
  ))
);

const MovieData = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p className="no-results">No movies found.</p>;
  }

  return movies.map((movie) => {
    const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : '';

    return (
      <div className="movie-card" key={movie.imdbID || `${movie.Title}-${movie.Year}`}>
        {poster ? (
          <img className="movie-card__img" src={poster} alt={movie.Title} />
        ) : (
          <div className="movie-card__poster-placeholder">No Image</div>
        )}
        <h2 className="movie-card__title">{movie.Title}</h2>
        <p className="movie-card__year">{movie.Year}</p>
      </div>
    );
  });
};

const Nav = () => {
  const searchFormRef = useRef(null);
  const searchInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [resultsText, setResultsText] = useState('Showing: ...');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const fetchMovies = async (searchTerm) => {
    setIsLoading(true);
    setResultsText(`Showing: ${searchTerm}`);

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`,
      );
      const data = await res.json();

      if (data.Response === 'True') {
        setMovies(data.Search || []);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  const searchTerm = searchInputRef.current.value.trim();
  if (searchTerm) {
    fetchMovies(searchTerm);
  }
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/" className="logo__link" aria-label="Home">
          <img src={fesLogo} alt="" className="logo__img" width="50px" />
        </Link>
        <div className="logo__title">
          <span>Simplified</span> Flix
        </div>
      </div>

      <form ref={searchFormRef} id="searchForm" onSubmit={handleFormSubmit}>
        <div className="search-form__group">
          <input
            ref={searchInputRef}
            type="text"
            id="searchInput"
            placeholder="Search movies..."
            required
          />
          <button className="search-form__button" type="submit" aria-label="Search">
            <svg
              className="search-form__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </form>

      <div id="resultsCount" className="results-count">
        {resultsText}
      </div>

      <div id="moviesGrid" className="movies-grid">
        {isLoading ? <Skeletons /> : <MovieData movies={movies} />}
      </div>

      <div className="currentMovies">
        <i className="fas fa-spinner movies__loading--spinner"></i>
      </div>
    </nav>
  );
};

export default Nav;