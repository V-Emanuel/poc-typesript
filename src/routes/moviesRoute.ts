import { Router } from "express";
import { postMovie, getMovies } from "../controllers/moviesController.js";
import { moviesSchemma } from "../schemas/moviesSchema.js";
import {validateSchema} from "../middleware/validateSchema.js";

const moviesRoute = Router();

moviesRoute.get("/movies", getMovies);
moviesRoute.post("/movies", validateSchema(moviesSchemma),postMovie);

export default  moviesRoute;