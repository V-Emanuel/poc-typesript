import { Request, Response} from "express";
import { insertCast } from "repositories/castRepository";
export async function postCast(req: Request, res: Response) {
    const {idMovie, idActor} = req.body;
    try {
        insertCast(idMovie, idActor);
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err);
    }
}