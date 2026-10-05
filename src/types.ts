export type Movie = {
    id: number;
    title: string;
    year: number;
    genre: string;
    status: Status;
    rating?: number;
    note?: string;
}

export type Status = "do obejrzenia" | "w trakcie" | "obejrzany";
