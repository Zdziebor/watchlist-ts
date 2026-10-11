import { printAll, printStats } from "./display.js";
import { Watchlist } from "./Watchlist.js";
import { save, load } from "./storage.js";


const loadedArray = await load();

const movieWatchlist = new Watchlist(loadedArray);

const args = process.argv;
const argsList = args.slice(2);
const command = argsList[0];
const commandArgs = argsList.slice(1);

switch (command) {

    case 'list':
        printAll(movieWatchlist.getAll());
        break;
    case 'stats':
        printStats(movieWatchlist.getAll());
        break;
    case 'search':
        if (commandArgs[0] == undefined) {
            console.log("Użycie: npm run dev -- search 'tytuł'")
        } else {
            printAll(movieWatchlist.search(commandArgs[0]));
        }
        break;
    case 'watch':
        if (commandArgs[0] == undefined) {
            console.log("Użycie: npm run dev -- watch 1")
        } else {

            if (movieWatchlist.markAsWatched(Number(commandArgs[0]))) {
                await save(movieWatchlist.getAll());
                break
            } else {
                console.log("Nie znaleziono filmu");
            }
        }
        break;

    case 'rate':
        if (commandArgs[0] === undefined || commandArgs[1] === undefined) {
            console.log("Użycie: npm run dev -- rate 1 8")
        } else {
            if (movieWatchlist.rate(Number(commandArgs[0]), Number(commandArgs[1]))) {
                await save(movieWatchlist.getAll());
            } else {
                console.log("Nieprawidłowa ocena lub nie znaleziono filmu");
            }
        }
        break;
    case 'remove':
        if (commandArgs[0] === undefined) {
            console.log("Użycie: npm run dev -- remove 1");
        } else {
            if (movieWatchlist.remove(Number(commandArgs[0]))) {
                await save(movieWatchlist.getAll());
            } else {
                console.log("Nie znaleziono filmu")
            }
        }
        break;


    case 'add':
        if (commandArgs[0] === undefined || commandArgs[1] === undefined || commandArgs[2] === undefined) {
            console.log("Użycie: npm run dev -- add 'Diuna' 2021 'Sci-Fi'");
        } else {
            const year = Number(commandArgs[1]);
            if (year <= 0 || !Number.isInteger(year)) {
                console.log("Rok musi być dodatnią liczbą całkowitą")
            } else {
                movieWatchlist.add(commandArgs[0], year, commandArgs[2]);
                await save(movieWatchlist.getAll());
            }
        }

        break;
    default:
        console.log("Dostępne komendy: list, stats, search, watch, rate, remove, add");


}