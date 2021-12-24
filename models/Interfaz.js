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

                <div class="btn-next btn btn-test" id="siguente-categoria">
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

    /**
     * 
     * @param {number} opcionActual la posicion actual de la pregunta en el test
     * @param {*} total 
     */

    mostrarProgreso(opcionActual, total){
        console.log(opcionActual)
        const element = document.getElementById('progreso')
        element.innerHTML = `Pregunta ${opcionActual} de ${total}`
        
    }

    mostrarCategoria(categoria){
        const categoriaTitle = document.getElementById('categoria-title')
        categoriaTitle.innerHTML = categoria        
    }

    mostrarDificultad(dificultad) {
        const dificultadTitle = document.getElementById('dificultad-title')
        dificultadTitle.innerHTML = dificultad
    }
}