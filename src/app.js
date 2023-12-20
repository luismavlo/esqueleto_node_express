import express from 'express';
import { enableCors } from "./config/plugins/cors.js";

const app = express();

const ACCEPTED_ORIGINS = [
    'http://localhost:8080',
    //agregar los origenes aceptados
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

enableCors(app, ACCEPTED_ORIGINS);

//definir rutas


export default app;