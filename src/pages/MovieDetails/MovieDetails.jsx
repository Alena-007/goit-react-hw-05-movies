import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from '../../API';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from 'components/Box';
import { StyledLink, Link } from './MovieDetails.styled';

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
    <Box width="1200px" ml="auto" mr="auto" as="main" p={4}>
      {error && toast.error(error)}
      <StyledLink to={goBackLinkHref}>Go back</StyledLink>
      <Box
        as="section"
        mb={4}
        display="flex"
        justifyContent="center"
        gridGap={5}
        borderBottom="normal"
      >
        <img
          src={`https://www.themoviedb.org/t/p/w500${movieById.poster_path}`}
          alt={movieById.title}
          width="256"
        />
        <div>
          <Box as="h1" mb={3} color="#4B0082" borderBottom="normal">
            {movieById.title}
          </Box>
          <Box as="p" mb={4}>
            User Score: {(movieById.vote_average * 10).toFixed(0)} %
          </Box>
          <Box as="h2" mb={3}>
            Overview
          </Box>
          <Box as="p" mb={5}>
            {movieById.overview}
          </Box>
          <Box as="h3" mb={3}>
            Genres
          </Box>
          <p>{movieById.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </Box>
      <Box as="section" borderBottom="normal">
        <Box as="h3" mb={3}>
          Additional information
        </Box>
        <Box as="ul" mb={3}>
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
        </Box>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
