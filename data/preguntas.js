import { Pregunta } from "./../models/Pregunta.js";
import { data } from "./data.js";

export const preguntas = data.map(pregunta => new Pregunta(pregunta.pregunta,pregunta.opciones,pregunta.correcta))
    