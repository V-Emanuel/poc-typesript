
import express from 'express';
import dotenv from 'dotenv';
import moviesRoute from './routes/moviesRoute.js';
import actorsRoute from './routes/actorsRoute.js';

dotenv.config();
const port = process.env.PORT || 5001;
const app = express();

app.use(moviesRoute);
app.listen(port, () => console.log(`Server running in port ${port}`));

