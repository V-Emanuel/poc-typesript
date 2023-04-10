import { nameSchemma } from "schemas/nameSchema";
import { Request, Response} from "express";
import {ActorsType} from "protocols.js";
import { insertActor, listCast } from "repositories/actorsRepository.js";

export async function postActor(req: Request, res: Response) {
    const {name} = req.body as ActorsType;
   /* const validation = moviesSchemma.validate( movie , { abortEarly: true });
    if (!validation.error) {
        return res.sendStatus(400);
    }*/
    try {
        insertActor(name);
        res.sendStatus(201);
        console.log(name);
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function listMovieCast(req: Request, res: Response) {
    const {idMovie} = req.body;
    try {
        const cast = listCast(idMovie);
        res.send((await cast).rows);
    } catch (err) {
        res.status(500).send('Não existem filmes ainda');
    }
}