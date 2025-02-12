function contarVocales(texto) {
    const vocales = 'aeiouAEIOU';
    let contador = 0;
    
    for (let letra of texto) {
        if (vocales.includes(letra)) {
            contador++;
        }
            
    }
    return contador;

}

console.log(contarVocales('Hola, mundo!'));
console.log(contarVocales('aeiou'));

// -------------

function encontrarMaximo(array) {
    if (array === '') {
        return "array vacío";
    }

    let maximo = array[0];
    for (let numero of array) {
        if (numero > maximo) {
            maximo = numero;
        }
    }
    return maximo;
}

console.log(encontrarMaximo([1, 2, 20, 4, 10]));
console.log(encontrarMaximo([]));

// -------------

function esCapicua(texto) {
    let textoInvertido = texto.split('').reverse().join(''); // split va con '' porque es lo que se le agrega a cada letra al separarlas en el array
    if (texto === textoInvertido) { 
        return true;
    }
    return false;

}

console.log(esCapicua('radar'));
console.log(esCapicua('Fecha'));

// -------------

function sumarNumeros(array) {
    let suma = array.reduce((acumulador, valorActual) => 
        acumulador + valorActual, 0)
    return suma;
    }

console.log(sumarNumeros([1, 2, 3]));
console.log(sumarNumeros([10, 20, 30]));

function esPositivo(array) {
    let positivos = array.filter((numero) => {
        return numero > 0;
    });
    return positivos;
}

console.log(esPositivo([1, -2, 3]));

// -------------

function contarLetras(texto) {
    let contador = {};
    for (let letra of texto.toLowerCase()) {
        if (contador[letra]) {
            contador[letra]++;
        }
        else {
            contador[letra] = 1;
        }
    }
    return contador;
}

console.log(contarLetras('Hola, mundo!'));