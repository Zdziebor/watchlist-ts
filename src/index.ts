import { printAll, printStats } from "./display.js";
import { Watchlist } from "./Watchlist.js";
import { save, load } from "./storage.js";



const loadedArray = await load();

const movieWatchlist = new Watchlist(loadedArray);



const movieList = movieWatchlist.getAll();

printAll(movieList);
printStats(movieList);

await save(movieList);

