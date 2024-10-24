import React, { useEffect, useState } from 'react';
import { fetchUpcomingMovies } from '../api/movieApi';
import MovieList from './MovieList';

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const upcomingMovies = await fetchUpcomingMovies();
      setMovies(upcomingMovies);
    };
    getMovies();
  }, []);

  return (
    <div className="upcoming-page">
      <h1>Upcoming Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default UpcomingPage;
