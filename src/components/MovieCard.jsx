import React, { useState } from 'react';
import MovieCardPlaceholder from './MovieCardPlaceholder';

const MovieCard = ({ movie }) => {
  const [imgError, setImgError] = useState(false);

  if (!movie.poster_path || imgError) {
    return <MovieCardPlaceholder title={movie.title} />;
  }

  return (
    <img 
      src={`https://tmdb.org{movie.poster_path}`} 
      alt={movie.title}
      onError={() => setImgError(true)}
      style={{ width: '100%', aspectRatio: '2/3', borderRadius: '8px', objectFit: 'cover' }}
    />
  );
};
