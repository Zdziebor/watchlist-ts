type Movie = {
    title: string;
    year: number;
    genre: string;
    watched: boolean;
}


const movie1: Movie = {
    title: "Hobbit",
    year: 2012,
    genre: "Adventure",
    watched: true
};

const movie2: Movie = {
    title: "Avengers",
    year: 2020,
    genre: "Action",
    watched: true
};

const movie3: Movie = {
    title: "The Simpsons",
    year: 2011,
    genre: "Comedy",
    watched: false
};




const movies: Movie[] = [movie1, movie2, movie3];

console.log(movies.length);

for (const movie of movies) {
    console.log(`${movie.title} (${movie.year}) - ${movie.genre}`);
}

for (const movie of movies) {
    if (!movie.watched) {
        console.log(`${movie.title} (${movie.year}) - ${movie.genre}`);
    }
}


const printMovie = (movie: Movie) => {
    console.log(movie.watched ? `✅ ${movie.title} (${movie.year}) - ${movie.genre}` : `⬜ ${movie.title} (${movie.year}) - ${movie.genre}`)
}


printMovie(movie3);

function printAll(movieArray: Movie[]): void {

    console.log(`WATCHLIST - ${movieArray.length}`)

    for (const movie of movieArray) {
        printMovie(movie);
    }

}

//printAll(movies);

function addMovie(movieArray: Movie[], movie: Movie): void {
    movieArray.push(movie);
}

const movie4: Movie = {
    title: "Superman",
    year: 2019,
    genre: "Action",
    watched: false
}

addMovie(movies, movie4);

printAll(movies);

function countUnwatched(movieArray: Movie[]): number {
    let watchCount = 0;
    for (const movies of movieArray) {
        if (movies.watched === false) {
            watchCount++;
        }
    }
    return watchCount;
}

console.log(countUnwatched(movies));