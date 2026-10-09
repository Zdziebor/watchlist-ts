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


    findById(id: number): Movie | undefined {

        const movieById = this.movies.find(element => element.id === id);

        if (movieById !== undefined) {
            return movieById;
        } else {
            return undefined
        }



    }


    markAsWatched(id: number): boolean {
        const watchedMovie = this.findById(id);
        if (watchedMovie === undefined) {
            return false;

        } else {
            watchedMovie.status = "obejrzany";
            return true;
        }
    }

    rate(id: number, rating: number): boolean {


        const movieFound = this.findById(id);
        if (!(rating >= 1 && rating <= 10 && Number.isInteger(rating))) {
            return false;
        } else if (movieFound === undefined) {
            return false;
        } else {
            movieFound.status = "obejrzany";
            movieFound.rating = rating;
            return true;

        }

    }

    remove(id: number): boolean {
        const movieFoundIndex = this.movies.findIndex(element => element.id === id);
        if (movieFoundIndex === -1) {
            return false
        } else {
            this.movies.splice(movieFoundIndex, 1);
            return true;
        }
    }

    search(phrase: string): Movie[] {

        const phraseModified = phrase.trim().toLowerCase();

        const movieFound = this.movies.filter(element => element.title.toLowerCase().includes(phraseModified))

        return movieFound;

    }

}