import axios from "axios";

const API_key = "d4312c9afc1972cc1249c5b0fe157ecd";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

async function getTrendingFilms() {
  const resp = await axios({
    method: "GET",
    url: `/trending/movie/week?api_key=${API_key}`,
  });
  return resp;
}

function getFilmById(id) {
  return axios({
    method: "GET",
    url: `/movie/${id}?api_key=${API_key}`,
  });
}

function getFilmsByQuery(query) {
  return axios({
    method: "GET",
    url: `/search/movie?api_key=${API_key}=` + query,
  });
}

function getCastInfo(id) {
  return axios.get(`/movie/${id}/credits?api_key=${API_key}`);
}

function getReviewsInfo(id) {
  return axios.get(`/movie/${id}/reviews?api_key=${API_key}`);
}

export {
  getTrendingFilms,
  getFilmById,
  getFilmsByQuery,
  getCastInfo,
  getReviewsInfo,
};
