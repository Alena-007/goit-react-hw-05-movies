import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from '../API';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieById(movieId)
      .then(data => setMovieById(data))
      .catch(error => setError(error.message));
  }, [movieId]);

  if (!movieById) return null;

  return (
    <div>
      {error && toast.error(error)}
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w500${movieById.poster_path}`}
          alt={movieById.title}
          width="300"
        />
        <div>
          <h1>{movieById.title}</h1>
          <p>User Score: {(movieById.vote_average * 10).toFixed(0)} %</p>
          <h2>Overview</h2>
          <p>{movieById.overview}</p>
          <h3>Overview</h3>
          <p>{movieById.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
