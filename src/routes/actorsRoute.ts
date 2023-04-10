import { Router } from "express";
import { postActor, listMovieCast } from "controllers/actorsController.js";
import { nameSchemma } from "schemas/nameSchema.js";
import {validateSchema} from "../middleware/validateSchema.js";

const actorsRoute = Router();

actorsRoute.post("/actors", validateSchema(nameSchemma),postActor);
actorsRoute.get("/cast", listMovieCast);

export default  actorsRoute;