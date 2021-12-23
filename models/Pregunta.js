export class Pregunta {
    /**
     * 
     * @param {string} pregunta texto de la pregunta
     * @param {string[]} opciones arreglo con las opciones de respuesta
     * @param {string} correcta texto de respuesta correcta
     */
    constructor(pregunta,opciones,correcta){
        this.pregunta = pregunta
        this.opciones = opciones
        this.correcta = correcta
    }

    /**
     * 
     * @param {string} opcion opcion elegida por el usuario
     * @returns {boolean} retorna true si la respuesta es correcta 
     */
    respuestaCorrecta(opcion){
        return opcion === this.correcta
    }
}


