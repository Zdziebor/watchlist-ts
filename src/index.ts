type Movie = {
    id: number;
    title: string;
    year: number;
    genre: string;
    status: Status;
    rating?: number;
    note?: string;
}


const movie1: Movie = {
    id: 1,
    title: "Hobbit",
    year: 2012,
    genre: "Adventure",
    status: "obejrzany",
    rating: 8.7
};

const movie2: Movie = {
    id: 2,
    title: "Avengers",
    year: 2020,
    genre: "Action",
    status: "obejrzany",
    rating: 9.4
};

const movie3: Movie = {
    id: 3,
    title: "The Simpsons",
    year: 2011,
    genre: "Comedy",
    status: "do obejrzenia"
};




const movies: Movie[] = [movie1, movie2, movie3];

console.log(movies.length);

for (const movie of movies) {
    console.log(`${movie.title} (${movie.year}) - ${movie.genre}`);
}

// for (const movie of movies) {
//     if (!movie.watched) {
//         console.log(`${movie.title} (${movie.year}) - ${movie.genre}`);
//     }
// }


const printMovie = (movie: Movie) => {
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


printMovie(movie3);

function printAll(movieArray: Movie[]): void {

    // console.log(`WATCHLIST - ${movieArray.length}`)

    for (const movie of movieArray) {
        printMovie(movie);
    }

}

//printAll(movies);

function addMovie(movieArray: Movie[], movie: Movie): void {
    movieArray.push(movie);
}

const movie4: Movie = {
    id: 4,
    title: "Superman",
    year: 2019,
    genre: "Action",
    status: "w trakcie"
}

addMovie(movies, movie4);

printAll(movies);

function countUnwatched(movieArray: Movie[]): number {
    let watchCount = 0;
    for (const movies of movieArray) {
        if (movies.status !== "obejrzany") {
            watchCount++;
        }
    }
    return watchCount;
}

console.log(countUnwatched(movies));

type Status = "do obejrzenia" | "w trakcie" | "obejrzany";

function findById(movie: Movie[], id: number): Movie | undefined {

    const result = movie.find((element) => element.id === id);

    return result;
}

const test = findById(movies, 1);

if (test !== undefined) {
    console.log(test.title);
}

function byStatus(movie: Movie[], status: Status): Movie[] {
    const statusFilter: Movie[] = movie.filter((elements) => elements.status == status);
    return statusFilter
}

const statusResult = byStatus(movies, "obejrzany");

printAll(statusResult);

function byGenre(movie: Movie[], genre: string): Movie[] {

    const genreFiltered: Movie[] = movie.filter((elements) => elements.genre === genre);
    return genreFiltered;

}

const filterByGenre = byGenre(movies, "Action");

printAll(filterByGenre);


function search(movie: Movie[], phrase: string): Movie[] {

    const phraseTrimmed = phrase.trim();
    const phraseLower = phraseTrimmed.toLowerCase();

    const movieToLower: Movie[] = movie.filter(element => element.title.toLowerCase().includes(phraseLower));

    return movieToLower;

}

const searchResult: Movie[] = search(movies, "xyz");

printAll(searchResult);


function unwatched(movies: Movie[]) {

    const moviesUnwatched = movies.filter(elements => elements.status !== "obejrzany");
    return moviesUnwatched;

}

const unwatchedMovies = unwatched(movies);

console.log("Movies unwatched!");
printAll(unwatchedMovies);


function markAsWatched(movie: Movie[], id: number): boolean {

    const returnedValue = findById(movie, id);

    if (returnedValue === undefined) {
        return false;
    }

    returnedValue.status = "obejrzany";
    return true;


}

console.log(markAsWatched(movies, 999));

printAll(movies);

function rateMovie(movie: Movie[], id: number, rating: number): boolean {

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

printAll(movies);

console.log(rateMovie(movies, 4, 15));
console.log(rateMovie(movies, 4, 7.5));
console.log(rateMovie(movies, 999, 8));
console.log(rateMovie(movies, 4, 8));


printAll(movies);


function addNote(movies: Movie[], id: number, note: string): boolean {

    const movieFound = findById(movies, id);

    if (movieFound === undefined) {
        return false;
    }

    movieFound.note = note;
    return true;

}

addNote(movies, 1, "Test notatka");

console.log(findById(movies, 1));

printAll(movies);

console.log(addNote(movies, 999, "Test notatka"));

const movieIndex = movies.findIndex(elements => elements.id === 3)

console.log(movieIndex);

function removeMovie(movie: Movie[], id: number): boolean {
    const movieIndex = movie.findIndex(elements => elements.id === id)

    if (movieIndex === -1) {
        return false;
    } else {
        const removed = movie.splice(movieIndex, 1)
        console.log(`Usunięto: ${removed[0].title}`);
    } return true;



}

console.log(removeMovie(movies, 3));

printAll(movies);

console.log(removeMovie(movies, 3));

function sortByYear(movie: Movie[]): Movie[] {

    const moviesCopy = [...movie];
    moviesCopy.sort((a, b) => a.year - b.year);

    return moviesCopy;

}

const moviesSortedByYear = sortByYear(movies)

printAll(moviesSortedByYear);

printAll(movies);

function sortByTitle(movie: Movie[]): Movie[] {
    const moviesCopy = [...movie];
    moviesCopy.sort((a, b) => a.title.localeCompare(b.title, "pl"));
    return moviesCopy;
}

const moviesSortedByTitle = sortByTitle(movies);
printAll(moviesSortedByTitle);

printAll(movies);

function sortByRating(movies: Movie[]): Movie[] {

    const moviesCopy = [...movies];

    const sortedRating = moviesCopy.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

    return sortedRating;

}

const sortedByRating = sortByRating([movie1, movie2, movie3, movie4]);

printAll(sortedByRating);

function countByStatus(movies: Movie[], status: Status): number {

    const movieMatch = byStatus(movies, status);
    return movieMatch.length;

}

console.log(countByStatus(movies, "obejrzany"));

function averageRating(movies: Movie[]) {

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

console.log(averageRating(movies));
console.log(averageRating([]));
console.log(averageRating([movie3]));

function bestMovie(movies: Movie[]): Movie | undefined {


    const ratingSorted = sortByRating(movies);

    const topOne = ratingSorted[0];

    if (topOne === undefined || topOne.rating === undefined) {
        return undefined;
    } else {
        return topOne
    }


}

function countByGenre(movies: Movie[]): Record<string, number> {

    const genreCount: Record<string, number> = {};

    for (const elements of movies) {
        genreCount[elements.genre] = (genreCount[elements.genre] ?? 0) + 1;
    }


    return genreCount;

}

function printStats(movies: Movie[]): void {

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

printStats(movies);
printStats([]);