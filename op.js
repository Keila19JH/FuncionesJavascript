const {
    operacionSuma,
    operacionResta,
    operacionMultiplicacion,
    operacionDivision,
    operacionPotenciaCuadratica} = require( './helpers/operaciones' );


    //objetos 
const resultados = {
    suma: 0,
    resta: 0,
    multiplicacion: 0,
    division: 0,
    potencia: 0
}

let numero1 = 10, numero2 = 14;


let respuesta = operacionSuma(numero1, numero2, resultados);
respuesta = operacionResta(numero1, numero2, resultados);
respuesta = operacionMultiplicacion(numero1, numero2, resultados);
respuesta = operacionDivision(numero1, numero2, resultados);
respuesta = operacionPotenciaCuadratica(numero1, numero2, resultados);


console.log(resultados);