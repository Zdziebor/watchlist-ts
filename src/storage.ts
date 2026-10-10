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

export async function load(): Promise<void> {

    const fileContent = await readFile(`watchlist.json`, "utf8");

    console.log(fileContent);

}