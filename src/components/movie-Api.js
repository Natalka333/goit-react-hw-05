import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmMwNTUzNTRhMDk2ZDZiOGI0YzcxOWJjMmI0N2FhNyIsIm5iZiI6MTcyMzM4MjE0MS4xMDQwNjIsInN1YiI6IjY2YjhiMzFjZmFmNTJhMzUwNmYyYzYzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mvRivEttki9hvNgyfPDiHNQXkfi_8wPbZn5HWo-g9Ig'
    }
};


export const FetchTrendMovieList = async () => {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/day?`, options);


    return data;
};

export const FetchSearchMovies = async (query) => {
    const { data } = await axios.get(`${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${query}`, options);

    return data;
};

// https://api.themoviedb.org/3/movie/movie_id?language=en-US'
export const FetchMovieDetails = async (movieId) => {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, options);

    return data;

};
// https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US
export const FetchMovieCredits = async (movieId) => {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits?language=en-US`, options);

    return data;
};
// https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1
export const FetchMovieReviews = async (movieId) => {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`, options);

    return data;
};