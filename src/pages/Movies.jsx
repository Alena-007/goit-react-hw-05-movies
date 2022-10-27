import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovies } from 'API';
import { Searchbar } from 'components/Searchbar';
import { MoviesList } from 'components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const request = searchParams.get('query') ?? '';

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

  const handleFormSubmit = value => {
    if (request === value) {
      return;
    }
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      <h1>Movies page</h1>
      <Searchbar onSubmit={handleFormSubmit} value={request} />
      {error && toast.error(error)}
      {movies.length > 0 && <MoviesList movies={movies} />}
      <ToastContainer autoClose={3000} theme="colored" />
    </main>
  );
};

export default Movies;
