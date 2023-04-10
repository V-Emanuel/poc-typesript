import { Router } from "express";
import { postCast } from "controllers/castController";
const castRoute = Router();

castRoute.post("/cast",postCast);

export default  castRoute;