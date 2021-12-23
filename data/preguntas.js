import { Pregunta } from "./../models/Pregunta.js";
import { categoriaGeneral } from "./data.js";

export const preguntas = categoriaGeneral.map(pregunta => new Pregunta(pregunta.pregunta,pregunta.opciones,pregunta.correcta))
