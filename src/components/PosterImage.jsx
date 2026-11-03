import React, { useEffect, useState } from 'react';

const PosterImage = ({
  src,
  alt,
  className,
  placeholderClassName,
  placeholderText = 'Movie Poster Not Available',
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (!src || hasError) {
    return <div className={placeholderClassName}>{placeholderText}</div>;
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
    />
  );
};

export default PosterImage;