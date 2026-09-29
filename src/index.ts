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