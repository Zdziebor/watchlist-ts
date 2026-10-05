import type { Movie, Status } from "./types";

export function findById(movie: Movie[], id: number): Movie | undefined {

    const result = movie.find((element) => element.id === id);

    return result;
}


export function byStatus(movie: Movie[], status: Status): Movie[] {
    const statusFilter: Movie[] = movie.filter((elements) => elements.status == status);
    return statusFilter
}

export function byGenre(movie: Movie[], genre: string): Movie[] {

    const genreFiltered: Movie[] = movie.filter((elements) => elements.genre === genre);
    return genreFiltered;

}

export function search(movie: Movie[], phrase: string): Movie[] {

    const phraseTrimmed = phrase.trim();
    const phraseLower = phraseTrimmed.toLowerCase();

    const movieToLower: Movie[] = movie.filter(element => element.title.toLowerCase().includes(phraseLower));

    return movieToLower;

}

export function unwatched(movies: Movie[]) {

    const moviesUnwatched = movies.filter(elements => elements.status !== "obejrzany");
    return moviesUnwatched;

}

export function addMovie(movieArray: Movie[], movie: Movie): void {
    movieArray.push(movie);
}

export function markAsWatched(movie: Movie[], id: number): boolean {

    const returnedValue = findById(movie, id);

    if (returnedValue === undefined) {
        return false;
    }

    returnedValue.status = "obejrzany";
    return true;


}

export function rateMovie(movie: Movie[], id: number, rating: number): boolean {

    if (!(rating <= 10 && rating >= 1 && Number.isInteger(rating))) {
        return false;
    }


    const searchResult = findById(movie, id);

    if (searchResult === undefined) {
        return false;
    } else {
        searchResult.status = "obejrzany";
        searchResult.rating = rating;
    } return true;

}

export function addNote(movies: Movie[], id: number, note: string): boolean {

    const movieFound = findById(movies, id);

    if (movieFound === undefined) {
        return false;
    }

    movieFound.note = note;
    return true;

}

export function removeMovie(movie: Movie[], id: number): boolean {
    const movieIndex = movie.findIndex(elements => elements.id === id)

    if (movieIndex === -1) {
        return false;
    } else {
        const removed = movie.splice(movieIndex, 1)
        console.log(`Usunięto: ${removed[0].title}`);
    } return true;



}

export function sortByYear(movie: Movie[]): Movie[] {

    const moviesCopy = [...movie];
    moviesCopy.sort((a, b) => a.year - b.year);

    return moviesCopy;

}

export function sortByTitle(movie: Movie[]): Movie[] {
    const moviesCopy = [...movie];
    moviesCopy.sort((a, b) => a.title.localeCompare(b.title, "pl"));
    return moviesCopy;
}

export function sortByRating(movies: Movie[]): Movie[] {

    const moviesCopy = [...movies];

    const sortedRating = moviesCopy.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

    return sortedRating;

}