let movies = [
    {
        id: 0,
        name: "Movie1",
        score: 3.3
    },
    {
        id: 1,
        name: "Movie2",
        score: 4.3
    },
    {
        id: 2,
        name: "Movie3",
        score: 5.3
    },
    {
        id: 3,
        name: "Movie4",
        score: 10.3
    },
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}