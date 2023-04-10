import { QueryResult } from "pg";
import { db } from "../config/database.js";
import { MovieType, MovieEntity} from "protocols";

export async function insertMovie(movie: MovieType) {
    await db.query(`INSERT INTO movies (name, description, release) VALUES ($1, $2, $3);`,
        [movie.name, movie.description, movie.release]
      );
}
export async function listMovies(): Promise<QueryResult<MovieEntity>> {
    return await db.query(`SELECT * FROM movies`);
}
export async function findMovie(name: string): Promise<QueryResult> {
    return await db.query(`SELECT * FROM movies WHERE name = $1;`, [name]);
}



