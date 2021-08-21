import axios from "axios";

const API_KEY = "d4312c9afc1972cc1249c5b0fe157ecd";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const fetchTrendingMovies = () => {
  return axios.get(`/movie/popular`).catch((error) => error);
};

const fetchSearchMovies = ({ searchQuery = "" }) => {
  return axios
    .get(`/search/movie?query=${searchQuery}`)
    .then(({ data }) => data)
    .catch((error) => error);
};

const fetchMovieDetails = (movieId) => {
  return axios
    .get(`/movie/${movieId}`)
    .then(({ data }) => data)
    .catch((error) => error);
};

const fetchMovieReviews = (movieId) => {
  return axios
    .get(`/movie/${movieId}/reviews`)
    .then(({ data }) => data)
    .catch((error) => error);
};

const fetchMovieCast = (movieId) => {
  return axios
    .get(`/movie/${movieId}/credits`)
    .then(({ data }) => data)
    .catch((error) => error);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovieDetails,
  fetchMovieReviews,
  fetchMovieCast,
};
