const { default: fetch } = require("node-fetch")

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}

export const getMovie = id => {
    let movieList = [];
    return fetch(API_URL)
        .then(res => res.json())
        .then(json => {
            movieList = json.data.movies
            const filteredMovies = movieList.filter(movie => movie.id === id);
            return filteredMovies[0];
        });
}