import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovies } from 'API';
import { Searchbar } from 'components/Searchbar';
import { MoviesList } from 'components/MoviesList';

export const Movies = () => {
  const [request, setRequest] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (request === '') {
      return;
    }

    getSearchMovies(request)
      .then(movies => {
        if (movies.length === 0) {
          return toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
        setMovies(movies);
      })
      .catch(error => setError(error.message));
  }, [request]);

  const handleFormSubmit = searchMovie => {
    if (request === searchMovie) {
      return;
    } else {
      setRequest(searchMovie);
      setMovies([]);
    }
  };

  return (
    <main>
      <h1>Movies page</h1>
      <Searchbar onSubmit={handleFormSubmit} />
      {error && toast.error(error)}
      {movies.length > 0 && <MoviesList movies={movies} />}
      <ToastContainer autoClose={3000} theme="dark" />
    </main>
  );
};
