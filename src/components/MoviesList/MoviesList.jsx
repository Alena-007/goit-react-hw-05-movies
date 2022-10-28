import { useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import { MovieLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gridGap={4}
            >
              <img
                src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="25"
              />

              <h4>{movie.title}</h4>
            </Box>
          </MovieLink>
        </li>
      ))}
    </ul>
  );
};
