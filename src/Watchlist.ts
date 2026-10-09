import type { Movie } from "./types";

export class Watchlist {


    private movies: Movie[] = [];
    private nextId: number = 1;



    getAll(): Movie[] {


        return [...this.movies]

    }

    add(title: string, year: number, genre: string): Movie {

        const movie: Movie = {
            id: this.nextId,
            status: "do obejrzenia",
            title: title,
            year: year,
            genre: genre


        }

        this.movies.push(movie);
        this.nextId++;
        return movie;

    }

}