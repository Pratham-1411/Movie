import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieList from './MovieList';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchPage;
