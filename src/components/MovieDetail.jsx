import React, { useEffect, useState } from 'react';
import { fetchMovieDetail, fetchMovieCast, getImageUrl } from '../api/movieApi';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieDetail(id);
      const movieCast = await fetchMovieCast(id);
      setMovie(movieData);
      setCast(movieCast);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;
