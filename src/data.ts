import type { Movie } from "./types.ts"


export const movie1: Movie = {
    id: 1,
    title: "Hobbit",
    year: 2012,
    genre: "Adventure",
    status: "obejrzany",
    rating: 8.7
};

export const movie2: Movie = {
    id: 2,
    title: "Avengers",
    year: 2020,
    genre: "Action",
    status: "obejrzany",
    rating: 9.4
};

export const movie3: Movie = {
    id: 3,
    title: "The Simpsons",
    year: 2011,
    genre: "Comedy",
    status: "do obejrzenia"
};


export const movie4: Movie = {
    id: 4,
    title: "Superman",
    year: 2019,
    genre: "Action",
    status: "w trakcie"
}

export const movies: Movie[] = [movie1, movie2, movie3];