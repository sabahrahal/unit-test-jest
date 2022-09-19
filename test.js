// importar la función sum del archivo app.js
const { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1 dollars", function(){   
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.5); //1 euro son 1 dolares, entonces 3.5 euros deberian ser = (3.5 * 1)
});

test("One Dollar should be 143.24 Yen", function(){   
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(501.34); //1 dolar son 143.24 Yenes, entonces 3.5 dolares deberian ser = (3.5 * 143.24)
});

test("One Yen should be 1 Pound", function(){   
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.02135); //1 Yen son 0.0061 libras, entonces 3.5 Yenes deberian ser = (3.5 * 0.0061)
});
