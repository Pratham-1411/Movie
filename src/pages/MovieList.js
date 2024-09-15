import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
            />
          </Link>
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
