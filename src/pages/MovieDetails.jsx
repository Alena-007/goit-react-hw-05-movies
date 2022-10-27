import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from '../API';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieById, setMovieById] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const goBackLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieById(movieId)
      .then(data => setMovieById(data))
      .catch(error => setError(error.message));
  }, [movieId]);

  if (!movieById) return null;

  return (
    <div>
      {error && toast.error(error)}
      <Link to={goBackLinkHref}>Go back</Link>
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
            <Link to="cast" state={{ from: goBackLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: goBackLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
