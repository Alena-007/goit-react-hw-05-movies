import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'API';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from './Home.styled';
import { Box } from 'components/Box';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <main>
      <Box width="1200px" ml="auto" mr="auto" as="section" p={4}>
        <Title>This week's most popular movies</Title>
        <MoviesList movies={movies} />
      </Box>
    </main>
  );
};
