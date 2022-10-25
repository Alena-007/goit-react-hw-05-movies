import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../API';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieCast(movieId)
      .then(data => setCast(data.cast))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div>
      {error && toast.error(error)};
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <div>
              {actor.profile_path ? (
                <img
                  src={`https://www.themoviedb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  width="100"
                />
              ) : (
                <div>
                  <p>No photo</p>
                </div>
              )}
              <div>
                <h2>{actor.name}</h2>
                <h3>Character: {actor.character}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
