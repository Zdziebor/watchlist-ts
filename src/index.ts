import { movie4, movies } from "./data.js";
import { printAll, printStats } from "./display.js";
import { addMovie } from "./movies.js";


addMovie(movies, movie4);
printAll(movies);
printStats(movies);