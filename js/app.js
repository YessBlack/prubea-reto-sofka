//@ts-check
import { preguntas } from "./../data/preguntas.js";
import { Test } from "./../models/Test.js";
import { Interfaz } from "./../models/Interfaz.js";


/**
 * 
 * @param {Test} test objeto test 
 * @param {Interfaz} interfaz objeto interfaz
 */

const renderizarPagina = (test,interfaz) => {
    if(test.aFinalizado()){
        interfaz.mostrarPuntos(test.puntos)
    }else{
        interfaz.mostrarPregunta(test.getIndexPregunta().pregunta)

        interfaz.mostrarOpciones(test.getIndexPregunta().opciones, (opcion) => {
        test.adivinarPregunta(opcion);
        interfaz.mostrarPuntosRonda(test.puntos)
        renderizarPagina(test,interfaz)
    });
        interfaz.mostrarProgreso(test.iPregunta + 1,test.preguntas.length)
        interfaz.mostrarCategoria(test.getIndexPregunta().categoria)
        interfaz.mostrarDificultad(test.getIndexPregunta().dificultad)
    }
    
}


function main(){
    const test = new Test(preguntas)
    const interfaz = new Interfaz
    
    renderizarPagina(test,interfaz)
}   

main()