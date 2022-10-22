import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'API';
import { MoviesList } from 'components/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <main>
      <h1>This week's most popular movies</h1>
      <MoviesList movies={movies} />
    </main>
  );
};
