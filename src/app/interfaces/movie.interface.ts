export interface Movie {
    countries: [string];
    directors: [
        {
            name: string;
            id: string;
        }
        ];
    genres: [string];
    idIMDB: string;
    languages: [string];
    metascore: string;
    plot: string;
    ranking: number;
    rated: string;
    rating: string;
    releaseDate: string;
    runtime: string;
    simplePlot: string;
    title: string;
    type: string;
    urlIMDB: string;
    urlPoster: string;
    votes: string;
    writers: [
        {
            name: string;
            id: string;
        }
        ];
    year: string;
}
