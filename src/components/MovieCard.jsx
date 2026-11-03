import React, { useState } from "react";
import MovieCardPlaceholder from "./ui/MovieCardPlaceholder";

const MovieCard = ({ movie }) => {
  const [imgError, setImgError] = useState(false);

  if (!movie.Poster || imgError) {
    return <MovieCardPlaceholder title={movie.Title} />;
  }

  return (
    <img
      src={`https"//image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.Title}
      onError={() => setImgError(true)}
      style={{ width: '100%', aspectRatio: '2/3', borderRadius: '8px', objectFit: 'cover' }}
    />
  );
};

export default MovieCard;
