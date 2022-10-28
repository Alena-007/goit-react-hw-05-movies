import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../API';
import { Box } from 'components/Box';
import {
  CastList,
  CastItem,
  CastImg,
  CastNoImg,
  CastDescr,
} from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieCast(movieId)
      .then(data => setCast(data.cast))
      .catch(error => setError(error.message));
  }, [movieId]);

  const isCast = cast.length === 0 || error;

  return (
    <Box as="section" pt={4}>
      {isCast && <p>We don't have any actors information for this movie</p>}
      <CastList>
        {cast.map(actor => (
          <CastItem key={actor.id}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              alignContent="center"
            >
              {actor.profile_path ? (
                <CastImg
                  src={`https://www.themoviedb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  width="100"
                />
              ) : (
                <CastNoImg>
                  <p>No photo</p>
                </CastNoImg>
              )}
              <CastDescr>
                <h4>{actor.name}</h4>
                <p>Character: {actor.character}</p>
              </CastDescr>
            </Box>
          </CastItem>
        ))}
      </CastList>
    </Box>
  );
};
