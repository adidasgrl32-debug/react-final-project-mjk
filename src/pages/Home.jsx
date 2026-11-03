import React from 'react';

const Home = () => {
  
	return (
  <>
  <div>
      <div className="controls">
        <p id="resultsInfo" className="resultsInfo"></p>      
        <p id="resultsCount" className="resultsCount"></p>
        <div className="sort__container">
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
      <div className="movies-grid" id="moviesGrid">
        <div className="movie-card">
          <img
            className="movie-card__img"
            src="https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg"
            alt=""
          />
          <h2 className="movie-card__title">Despicable Me</h2>
          <p className="movie-card__year">2010</p>
        </div>
        <div className="movie-card">
          <img
            className="movie-card__img"
            src="https://m.media-amazon.com/images/M/MV5BMTQxNzY1MjI5NF5BMl5BanBnXkFtZTcwNTI0MDY1OQ@@._V1_QL75_UX380_CR0,20,380,562_.jpg"
            alt=""
          />
          <h2 className="movie-card__title">Despicable Me 2</h2>
          <p className="movie-card__year">2013</p>
        </div>
        <div className="movie-card">
          <img
            className="movie-card__img"
            src="https://m.media-amazon.com/images/M/MV5BNjUyNzQ2MTg3Ml5BMl5BanBnXkFtZTgwNzE4NDM3MTI@._V1_QL75_UX380_CR0,20,380,562_.jpg"
            alt=""
          />
          <h2 className="movie-card__title">Despicable Me 3</h2>
          <p className="movie-card__year">2017</p>
        </div>
        <div className="movie-card">
          <img
            className="movie-card__img"
            src="https://m.media-amazon.com/images/M/MV5BNzY0ZTlhYzgtOTgzZC00ZTg2LTk4NTEtZDllM2E2NGE5Njg2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
            alt=""
          />
          <h2 className="movie-card__title">Despicable Me 4</h2>
          <p className="movie-card__year">2024</p>
        </div>
        <div className="movie-card">
          <img
            className="movie-card__img"
            src="https://m.media-amazon.com/images/M/MV5BMTY4NjM2MDUxMV5BMl5BanBnXkFtZTgwMDM0NjA2MDE@._V1_SX300.jpg"
            alt=""
          />
          <h2 className="movie-card__title">Despicable Me: Minion Madness</h2>
          <p className="movie-card__year">2010</p>
        </div>
      <div className="movie-card">
        <div className="movie-card__poster-placeholder">
         Movie Poster<br/>Not Available </div>
        <h2 className="movie-card__title">Despicable Me: Minion Mayhem 3D</h2>
        <p className="movie-card__year">2012</p>
      </div>
      <div className="movie-card">
      <img
        className="movie-card__img"
        src="https://m.media-amazon.com/images/M/MV5BNjAwNzA0NjAyNl5BMl5BanBnXkFtZTgwOTg2MDM4MzE@._V1_SX300.jpg"
        alt=""
        />
        <h2 className="movie-card__title">Despicable Me 2: 3 Mini-Movie Collection</h2>
        <p className="movie-card__year">2014</p>
        </div>
      <div className="movie-card">
        <div className="movie-card__poster-placeholder">
        <h2 className="movie-card__title">Despicable Me</h2>
        <p className="movie-card__year">2010</p>
        </div>
      </div>
          <div className="movie-card">
      <img
        className="movie-card__img"
        src="https://m.media-amazon.com/images/M/MV5BYjk5N2RhOGYtODQxMC00YTJmLWFmZTItMDljY2U5MDMxMDMyXkEyXkFqcGc@._V1_SX300.jpg"
        alt=""
        />
        <h2 className="movie-card__title">Despicable Me 2: The Music in the Film</h2>
        <p className="movie-card__year">2013</p>
        </div>
      <div className="movie-card">
        <div className="movie-card__poster-placeholder">
          Movie Poster<br/>Not Available </div>
        <h2 className="movie-card__title">Despicable Me 2: The Minions</h2>
        <p className="movie-card__year">2013</p>
      </div>
    </div>
  </div>
  </>
  );
}

export default Home;