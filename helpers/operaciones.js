const operacionSuma = ( num1 , num2, object ) => {
    object.suma = num1 + num2;
    return object;
}

const operacionResta = ( n1, n2, resultado2 ) => {
    resultado2.resta = n1 - n2;
    return resultado2;
}

const operacionMultiplicacion = (no1, no2, resultado3) => {
    resultado3.multiplicacion = no1 * no2;
    return resultado3;
}

const operacionDivision = (nm1, nm2, resultado4) => {
    resultado4.division = nm1 / nm2;
    return resultado4;
}

const operacionPotenciaCuadratica = (num1, num2, resultado5) => {
    resultado5.potencia = Math.pow(num1, 2);
    return resultado5;
}

module.exports = {
    operacionSuma,
    operacionResta,
    operacionMultiplicacion,
    operacionDivision,
    operacionPotenciaCuadratica,
}