import {filtrarMayores, usuarios} from "./usuarios.js";

const usuariosMayores = filtrarMayores(usuarios);

// desestructuración

usuariosMayores.forEach(({nombre, edad, email, ciudad}) => {
    console.log(`Nombre: ${nombre}, Edad: ${edad}, Email: ${email}, Ciudad: ${ciudad ?? "no definido"}`);
 });

// propagación ...
 const nuevosUsuarios = [...usuariosMayores, {nombre: 'Celeste', edad: 20, email: 'celeste12@gmail.com',}];
 console.log(nuevosUsuarios);

//  this
const boton = document.querySelector('button');
boton.addEventListener('click', function() {
    this.textContent = 'click realizado';
});

// este this no funciona porque la funcion es flecha
// boton.addEventListener('click', (event) => {
//     console.log(this); // this es el botón que disparó el evento
//     console.log('hola');
// })

// operador ternario
const edad = 18;
let puedeVotar = (edad >= 18) ? 'puede votar' : 'no puede votar';
console.log(puedeVotar);

// operador de propagación
const numerosPares = [2, 4, 6, 8, 10];
const numerosImpares = [1, 3, 5, 7, 9];

const numerosTodos = [...numerosPares, ...numerosImpares]; // si no usara ... se armaría un array de dos arrays dentro
console.log(numerosTodos);

const numMax = Math.max(...numerosTodos); // se debe usar ... para que Math.max reciba numeros individuales y no un array, ya que no los acepta

console.log('número máximo: ', numMax);

// valores truthy y falsy
const valores = [0, -0, 1, -1, null, undefined, '', 'hola', {}, []];

valores.forEach(valor => {
    if (valor) {
        console.log(`Valor: ${valor}, es truthy: ${Boolean(valor)}`);
    } else {
        console.log(`Valor: ${valor}, es falsy: ${Boolean(valor)}`);
    }
});

// uso de || y ??

function saludar(nombre) {
    let saludo = nombre || 'invitado';
    let mensaje = nombre ?? 'sin nombre proporcionado'; 

    console.log(`hola ${saludo}`);
    if (nombre) {
        console.log(`mensaje: bienvenido`);
    } else {
        console.log(`mensaje: ${mensaje}`);

    }
}

saludar('Camila'); // hola: Camila, mensaje: Camila
saludar(); // hola: invitado, mensaje: sin nombre proporcionado




