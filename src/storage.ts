import type { Movie } from "./types";
import { writeFile, readFile } from "node:fs/promises";

export async function save(movies: Movie[]): Promise<void> {

    const toJson = JSON.stringify(movies, null, 2);


    try {

        await writeFile('watchlist.json', toJson, "utf8")
        console.log("File created");
    } catch (error) {
        console.error("Failed");
    }


}

export async function load(): Promise<Movie[]> {

    try {
        const fileContent = await readFile(`watchlist.json`, "utf8");
        const jsonToArray = JSON.parse(fileContent);
        return jsonToArray;
    } catch (error) {
        console.log("Failed to read a file");
        return [];
    }

}