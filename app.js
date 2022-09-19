// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

function fromDollarToYen(numDolar){
    const result = parseFloat((numDolar * 143.24).toFixed(2));
    return result; 
}

function fromEuroToDollar(numEuros){
    return numEuros * 1;
}

function fromYenToPound(numYenes){
    return numYenes * 0.0061; 
}

module.exports = { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound };