import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch movie details
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError('Failed to load movie details.');
        setLoading(false);
      });

    // Fetch cast details
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then((response) => setCast(response.data.cast))
      .catch((error) => {
        console.log(error);
        setError('Failed to load cast details.');
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-detail-page">
      <div className="movie-header">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p className="movie-rating"> <span>Rating</span>: {movie.vote_average}</p>
          <p className="movie-runtime"> <span>Time</span>: {movie.runtime} min</p>
          <p className="movie-genres">
            {movie.genres.map((genre) => genre.name).join(', ')}
          </p>
          <p className="movie-release-date"><span>Release Date</span>: {movie.release_date}</p>
          <h3>Overview</h3>
          <p className="movie-overview">{movie.overview}</p>
        </div>
      </div>

      <h2>Cast</h2>
      <div className="cast-list">
        {cast.slice(0, 10).map((member) => (
          <div key={member.cast_id} className="cast-member">
            {member.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                alt={member.name}
                className="cast-image"
              />
            ) : (
              <img
                src="https://via.placeholder.com/150"
                alt={member.name}
                className="cast-image"
              />
            )}
            <p>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;
