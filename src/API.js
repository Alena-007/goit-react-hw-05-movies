const API_KEY_THEMOVIEDB = '8f869b0e17fd67e41e1d615a0551fc3f';
const BASE_URL = 'https://api.themoviedb.org/3';

const TRENDING_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const MOVIE_ID_URL = `${BASE_URL}/movie/`;

export const getTrendingMovies = page => {
  return fetch(`${TRENDING_URL}?api_key=${API_KEY_THEMOVIEDB}&page=${page}`)
    .then(respons => respons.json())
    .then(data => data.results);
};

export const getSearchMovies = (query, page) => {
  return fetch(
    `${SEARCH_URL}?api_key=${API_KEY_THEMOVIEDB}&query=${query}&page=${page}`
  )
    .then(respons => respons.json())
    .then(data => data.results);
};

export const getMovieById = id => {
  return fetch(`${MOVIE_ID_URL}${id}?api_key=${API_KEY_THEMOVIEDB}`)
    .then(respons => respons.json())
    .then(data => data.results);
};

export const getMovieCast = id => {
  return fetch(`${MOVIE_ID_URL}${id}/credits?api_key=${API_KEY_THEMOVIEDB}`)
    .then(respons => respons.json())
    .then(data => data.results);
};

export const getMovieReviews = id => {
  return fetch(`${MOVIE_ID_URL}${id}/reviews?api_key=${API_KEY_THEMOVIEDB}`)
    .then(respons => respons.json())
    .then(data => data.results);
};
