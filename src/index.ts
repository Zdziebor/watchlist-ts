import { printAll, printStats } from "./display.js";
import { Watchlist } from "./Watchlist.js";
import { save, load } from "./storage.js";

const watchlist = new Watchlist();
watchlist.add("Spider-Man", 2020, "Action");
watchlist.add("X-Men", 2023, "Action");

console.log(watchlist.rate(1, 15));
console.log(watchlist.rate(999, 8));
console.log(watchlist.rate(1, 8));

printAll(watchlist.getAll());
printStats(watchlist.getAll());

const copyCheck = watchlist.getAll();
copyCheck.splice(0, 1)

console.log(copyCheck.length);

console.log(watchlist.getAll().length)


await save(watchlist.getAll());

const loadedArray = await load();

printAll(loadedArray);