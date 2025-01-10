//let numeros = [1, 2, 3, 4];
//let promedio = calcularPromedio(numeros);
//console.log("el promedio es:", promedio);
//
//function calcularPromedio(numeros) {
//    let suma = numeros.reduce((total, num) => total + num, 0);
//    return suma / numeros.length;
//}

//let numeros = [1, 2, 3, 4];
//
//function numerosPares(numeros) {
//    return numeros.filter(num => num % 2 === 0);
//}
//
//let Pares = numerosPares(numeros);
//console.log(Pares);

let palabras = ["naranja", "manzana", "pera", "limon", "frutilla"];
let palabrasFiltradas = filtrarLongitud(palabras, 6);
console.log(palabrasFiltradas);

function filtrarLongitud(palabras, longitud) {
    return palabras.filter(palabra => palabra.length >= longitud);
}

