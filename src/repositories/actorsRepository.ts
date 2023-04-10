import { QueryResult } from "pg";
import { db } from "../config/database.js";
import {ActorsEntity} from "protocols";


export async function insertActor(name: string) {
    await db.query(`INSERT INTO actors (name) VALUES ($1);`,
        [name]
      );
}

export async function listCast(idMovie: number): Promise<QueryResult<ActorsEntity>> {
    return await db.query(`SELECT a.name
                            FROM actors a
                            JOIN cast e ON e.actor_id = a.id
                            WHERE e.movie_id = $1;
                            `, [idMovie]);
}