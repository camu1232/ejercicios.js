const parrafo = document.querySelector('p');
const boton = document.querySelector('button');
contador = 0;

function generarColorAleatorio() {
    const colores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    return colorAleatorio;
}

boton.addEventListener('click', function() {
    if (contador === 19) {
        contador++;
        parrafo.textContent = `Contador: ${contador}`;
        setTimeout(function() { 
            alert('Has llegado al final')
            contador = 0;
            parrafo.textContent = 'Contador: 0';
            parrafo.style.backgroundColor = 'white';
    }, 500);

    } else if (contador < 20) {
        contador++;
        parrafo.textContent = `Contador: ${contador}`;
    } 
    
    if (contador % 5 === 0 && contador !== 0) {
        const color = generarColorAleatorio();
        parrafo.style.backgroundColor = color;
        console.log(color);
    }
});