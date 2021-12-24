import { Pregunta } from "./../models/Pregunta.js";
import { data } from "./data.js";

/**
 * listas de objetos que guardan la informacion contenida en cada categoria
 */
let preguntasGeneral = []
let preguntasHistoria = []
let preguntasTecnologia = []
let pregutnasDisenoWeb = []
let preguntasVideojuegos = []

/**
 * Recorremos la data 
 * filtramos por categoria
 * agregamos las preguntas a cada arreglo por categoria
 */
data.forEach(element=>{
    switch (element.categoria) {
        case "General":
                preguntasGeneral.push(element)
            break;
        case "Historia":
            preguntasHistoria.push(element)
            break;
        case "Tecnologia":
            preguntasTecnologia.push(element)
            break;
        case "Diseño web":
            pregutnasDisenoWeb.push(element)
            break;
        case "Videojuegos":
            preguntasVideojuegos.push(element)
            break;
        default:
            console.log('Categoria no encontrada')
            break;
    }
})

/**
 * 
 * @param {array[Object]} arrayPreguntas recibe un array de objetos
 * @returns {array[Object]} retorna un objeto aleatorio del array suministrado
 */
function elegirPreguntaCategoria(arrayPreguntas){
    return arrayPreguntas[Math.floor(Math.random() * 5)]
}

/**
 * lista que guarda el objeto aleatorio escogido aleatoriamente
 */
 let ronda = []

ronda.push(elegirPreguntaCategoria(preguntasGeneral))
ronda.push(elegirPreguntaCategoria(preguntasHistoria))
ronda.push(elegirPreguntaCategoria(preguntasTecnologia))
ronda.push(elegirPreguntaCategoria(pregutnasDisenoWeb))
ronda.push(elegirPreguntaCategoria(preguntasVideojuegos))

/**
 * se recorre la ronda con las 5 preguntas escogidas
 */
export const preguntas = ronda.map((pregunta => new Pregunta(pregunta.categoria,pregunta.dificultad, pregunta.pregunta,pregunta.opciones,pregunta.correcta)))
