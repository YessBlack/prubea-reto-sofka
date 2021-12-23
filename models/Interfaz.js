import { preguntas } from "../data/preguntas.js"
import { Pregunta } from "./Pregunta.js"

//@ts-check
export class Interfaz{
    constructor(){}

    /**
     * 
     * @param {string} pregunta pregunta a mostrar
     */
    mostrarPregunta(pregunta){
        const preguntaContenido = document.getElementById('pregunta')
        preguntaContenido.innerHTML = pregunta
    }

    /**
     * 
     * @param {string[]} opciones las opciones de respuesta
     */
    mostrarOpciones(opciones,callback){
        const cardOpciones = document.getElementById('opciones')
        cardOpciones.innerHTML = ''

        opciones.forEach(opcion => {
            const containerCard = document.createElement('div')
            containerCard.innerText = opcion;
            containerCard.classList.add('card')
            containerCard.classList.add('opciones-pregunta')
            
            containerCard.addEventListener("click", () => callback(opcion));
            
            cardOpciones.append(containerCard);
        }); 
    }

    /**
     * 
     * @param {number} puntos puntaje total
     */

    mostrarPuntos(puntos){
        const puntaje = `
            <div class="container-score">
                <h1 class="title-score">Resultado</1>
                <h2 class="subtitle-score">Categoria</h2>
                <h2 class="subtitle-score">Tu Puntaje ${puntos}</h2>

                <div class="btn-next btn btn-test">
                    <a href="test.html"><span class="icon-start icon"></span>Siguiente Categoria</a>
                </div>
                <div class="btn-exit btn">
                    <a href="index.html"><span class="icon-exit icon"></span>Retirarse</a>
                </div>
            </div>
        `

        const element = document.getElementById('main')
        element.innerHTML = puntaje
    }
}