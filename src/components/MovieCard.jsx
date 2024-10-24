import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../api/movieApi';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
      <h3>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
