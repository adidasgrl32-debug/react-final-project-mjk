import React  from 'react';
import { Link } from 'react-router-dom';
import fesLogo from '../assets/fes-logo (3).png';

const Nav = () => {

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
      <form className="search-form" id="searchForm" name="searchForm">
        <div className="search-form__group">
          <input className="search-form__input"
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
      <div className="currentMovies">
        <i className="fas fa-spinner movies__loading--spinner"></i>
      </div>
    </nav>
  );
};

export default Nav;