import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div>
      <h1>Upcoming Movies</h1>
      <MovieList movies={movies} />
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default UpcomingPage;
