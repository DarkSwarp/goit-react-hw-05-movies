import axios from 'axios';

const API_KEY = 'c0cdc1a14e8a53ae3d25369920c09f3b';
// axios.defaults.baseURL = 'https://developers.themoviedb.org/3/';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    // `https://api.themoviedb.org/3/search/movie?api_key=c0cdc1a14e8a53ae3d25369920c09f3b&language=en-US&query=batman&page=1`
  );
  return data;
};

export const fetchSearchMovies = async (page, query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}`
  );
  return data;
};

export const fetchMovie = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${Number(id)}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchCast = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${Number(
      id
    )}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchReview = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${Number(
      id
    )}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data;
};