import React, { useEffect, useState } from 'react';
import { fetchTopRatedMovies } from '../api/movieApi';
import MovieList from './MovieList';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const topRatedMovies = await fetchTopRatedMovies();
      setMovies(topRatedMovies);
    };
    getMovies();
  }, []);

  return (
    <div className="top-rated-page">
      <h1>Top Rated Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default TopRatedPage;
