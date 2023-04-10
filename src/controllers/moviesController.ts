import {insertMovie, listMovies, findMovie } from "../repositories/moviesRepository.js";
import { moviesSchemma } from "../schemas/moviesSchema.js";
import { Request, Response} from "express";
import { MovieType } from "protocols.js";

export async function postMovie(req: Request, res: Response) {
    const movie = req.body as MovieType;
   /* const validation = moviesSchemma.validate( movie , { abortEarly: true });
    if (!validation.error) {
        return res.sendStatus(400);
    }*/
    const existingMovie = findMovie(movie.name)
    if ((await existingMovie).rowCount > 0) {
        return res.sendStatus(409);
    }
    try {
        insertMovie(movie)
        res.sendStatus(201);
        console.log(movie);
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function getMovies(req: Request, res: Response) {
    try {
        const movies = listMovies();
        res.send((await movies).rows);
    } catch (err) {
        res.status(500).send('Não existem filmes ainda');
    }
}


