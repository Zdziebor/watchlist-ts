import { unwatched } from "./movies.js";
import { averageRating, bestMovie, countByGenre } from "./stats.js";
import type { Movie } from "./types.ts"

export const printMovie = (movie: Movie) => {
    if (movie.status === "obejrzany") {
        if (movie.rating !== undefined) {
            console.log(`✅ [${movie.id}] ${movie.title} (${movie.year}) - ${movie.genre} ★ ${movie.rating} / 10`);

        } else {
            console.log(`✅ [${movie.id}] ${movie.title} (${movie.year}) - ${movie.genre}`);
        }
    } else if (movie.status === "w trakcie") {
        if (movie.rating !== undefined) {
            console.log(`▶️ [${movie.id}] ${movie.title} (${movie.year}) - ${movie.genre} ★ ${movie.rating} / 10`);

        } else {
            console.log(`▶️ [${movie.id}] ${movie.title} (${movie.year}) - ${movie.genre}`);
        }

    } else if (movie.status === "do obejrzenia") {
        if (movie.rating !== undefined) {
            console.log(`⬜ [${movie.id}] ${movie.title} (${movie.year}) - ${movie.genre} ★ ${movie.rating} / 10`);

        } else {
            console.log(`⬜ [${movie.id}] ${movie.title} (${movie.year}) - ${movie.genre}`);
        }
    }
}

export function printAll(movieArray: Movie[]): void {

    // console.log(`WATCHLIST - ${movieArray.length}`)

    for (const movie of movieArray) {
        printMovie(movie);
    }

}

export function printStats(movies: Movie[]): void {

    const unWatchedMovies = unwatched(movies);
    const watchedMovies = movies.length - unWatchedMovies.length


    console.log("STATYSTYKI");
    console.log(`Obejrzane: ${watchedMovies} z ${movies.length}`);
    console.log(`Do obejrzenia: ${unWatchedMovies.length}`);
    console.log(`Średnia ocena: ${averageRating(movies)}`)


    const highestRatedMovie = bestMovie(movies);
    if (highestRatedMovie === undefined) {
        console.log("Najlepszy: brak ocenionych filmów");
    } else {
        console.log(`Najlepszy: ${highestRatedMovie.title} (${highestRatedMovie.rating}/10)`)
    }

    const genreCount = countByGenre(movies);

    console.log("Gatunki");
    for (const genre in genreCount) {
        console.log(`${genre}: ${genreCount[genre]}`);
    }


}
