import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '7fb7e6c5';

const Skeletons = () => (
  Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="movie-card--skeleton">
      <div className="movie-card__img--skeleton" />
      <div className="movie-card__title--skeleton" />
      <p className="movie-card__year--skeleton" />
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
      <Link className="movie-card" to={`/moviedetails/${movie.imdbID}`} key={movie.imdbID || `${movie.Title}-${movie.Year}`}>
        {poster ? (
          <img className="movie-card__img" src={poster} alt={movie.Title} />
        ) : (
          <div className="movie-card__poster-placeholder">No Image</div>
        )}
        <h2 className="movie-card__title">{movie.Title}</h2>
        <p className="movie-card__year">{movie.Year}</p>
      </Link>
    );
  });
};

const SearchMovies = ({ sortMovies }) => {
  const location = useLocation();
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const [sortType, setSortType] = useState('default');

    useEffect(() => {
      const query = new URLSearchParams(location.search).get('q') || 'Despicable Me';
      setCurrentSearchTerm(query);
      fetchMovies(query);
    }, [location.search]);

   async function fetchMovies(query) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
    );
    setSearchData(data.Search || []);
    setLoading(false);
  }

  return (
    <>
      <div className="controls">
        <p id="resultsInfo" className="resultsInfo">Showing: {currentSearchTerm}</p>
        <p id="resultsCount" className="resultsCount"></p>
        <div>
          <label htmlFor="sortSelect">Sort:</label>
            <select id="sortSelect" value={sortType} onChange={(event) => setSortType(event.target.value)}>
              <option value="default">Default</option>
              <option value="a to z">A to Z</option>
              <option value="z to a">Z to A</option>
              <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
   </div>
   <div className="movies-grid" id="moviesGrid">
     {loading ? <Skeletons /> : <MovieData movies={sortMovies(sortType, searchData)} />}
   </div>
    </>
  );
};

export default SearchMovies;
