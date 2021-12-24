//@ts-check

import { Pregunta } from "./Pregunta.js";

export class Test{
    //se le puede pasar mas parametros, como quien esta contestando}
    iPregunta = 0
    puntos = 0

    /**
     *
     * @param {Pregunta[]} preguntas arreglo de preguntas
     */
    constructor(preguntas){
        this.preguntas = preguntas
    }

    /**
     *
     * @returns {Pregunta} pregunta encontrada
     */
    getIndexPregunta(){
        return this.preguntas[this.iPregunta]
    }

    /**
     *
     * @param {string} respuesta espera algun texto
     */

    adivinarPregunta(respuesta){
        if(this.getIndexPregunta().respuestaCorrecta(respuesta)){
            this.puntos+=100
        }else{
            alert('Sigue intentando')
            window.location.href='./../index.html'
        }
        this.iPregunta++
    }

    /**
     *
     * @returns {boolean} comparar indices
     */
    aFinalizado(){
        return this.preguntas.length === this.iPregunta
    }
}
