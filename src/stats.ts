import { byStatus, sortByRating } from "./movies";
import type { Movie, Status } from "./types";

export function countUnwatched(movieArray: Movie[]): number {
    let watchCount = 0;
    for (const movies of movieArray) {
        if (movies.status !== "obejrzany") {
            watchCount++;
        }
    }
    return watchCount;
}

export function countByStatus(movies: Movie[], status: Status): number {

    const movieMatch = byStatus(movies, status);
    return movieMatch.length;

}

export function averageRating(movies: Movie[]) {

    const ratedMovies = movies.filter(elements => elements.rating !== undefined);

    if (ratedMovies.length === 0) {
        return 0;
    }

    const sumOfRatings = ratedMovies.reduce((sum, elements) => sum + (elements.rating ?? 0), 0) / ratedMovies.length;
    const rounding1 = sumOfRatings * 10;
    const rounding2 = Math.round(rounding1)
    const rounding3 = rounding2 / 10;
    return rounding3;
}




export function bestMovie(movies: Movie[]): Movie | undefined {


    const ratingSorted = sortByRating(movies);

    const topOne = ratingSorted[0];

    if (topOne === undefined || topOne.rating === undefined) {
        return undefined;
    } else {
        return topOne
    }


}


export function countByGenre(movies: Movie[]): Record<string, number> {

    const genreCount: Record<string, number> = {};

    for (const elements of movies) {
        genreCount[elements.genre] = (genreCount[elements.genre] ?? 0) + 1;
    }


    return genreCount;

}