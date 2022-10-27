import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <div>
              <img
                src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="40"
              />

              <h2>{movie.title}</h2>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
