import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '7fb7e6c5';

const SearchMovies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get('searchInput')?.toString().trim();
    if (!query) return;

    setCurrentSearchTerm(query);
    fetchMovies(query);
    if (location.pathname !== '/') {
      navigate('/');
    }
  }

    useEffect(() => {
      fetchMovies('Despicable Me');
    }, []);

   async function fetchMovies(query) {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
      );
      setSearchData(data.Search || []);
    } catch (error) {
      setSearchData([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
  <form class="search-form" id="searchForm" onSubmit={handleSubmit}>
    <div class="search-form__group">
          <input
            class="search-form__input" type="text" id="searchInput" placeholder="Search movies..."
            required/>
          <button class="search-form__button" type="submit" aria-label="Search">
            <svg class="search-form__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round"stroke-linejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
  </form>
    <div class="currentMovies">
      <i class="fas fa-spinner movies__loading--spinner"></i>
    </div>
      <div className="controls">
        <p id="resultsInfo" className="resultsInfo"></p>
        <p id="resultsCount" className="resultsCount"></p>
        <div>
          <label htmlFor="sortSelect">Sort:</label>
            <select id="sortSelect">
              <option value="default">Default</option>
              <option value="a to z">A to Z</option>
              <option value="z to a">Z to A</option>
              <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
   </div>
    </>
  );
};

export default SearchMovies;