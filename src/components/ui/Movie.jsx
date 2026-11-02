import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = movie.url;

    image.onload = () => {
          setImg(image);
        };
    }, [movie.url]);
  
  return (
   <div className="movie">
    {img ? (
       <>
          <Link to={`/movie/${movie.id}`}>
            <figure className="movie__img--wrapper">
              <img
                src={img.src}
                alt=""
                className="movie__img" />
              </figure>
            </Link>
            <div className="movie__title">
              <Link to={`/movies/${movie.id}`} className="movie__title--link">
                {movie.Title}
              </Link>
            </div>
        </>
    ) : (
      <> 
      <div className="movie__img--skelton"></div>
        <div className="movie__title--skelton"></div>
      </>
    )}
    </div>
  );
};

export default Movie;