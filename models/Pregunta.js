export class Pregunta {
    /**
     * @param {string} categoria categoria 
     * @param {string} dificultad dificultad
     * @param {string} pregunta texto de la pregunta
     * @param {string[]} opciones arreglo con las opciones de respuesta
     * @param {string} correcta texto de respuesta correcta
     */
    constructor(categoria,dificultad,pregunta,opciones,correcta){
        this.categoria = categoria
        this.dificultad = dificultad
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


