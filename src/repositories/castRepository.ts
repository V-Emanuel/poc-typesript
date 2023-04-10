import { QueryResult } from "pg";
import { db } from "../config/database.js";



export async function insertCast(idMovie: number, idActor: number) {
    await db.query(`INSERT INTO cast (movie_id, actor_id) VALUES ($1, $2);`,
        [idMovie, idActor]
      );
}