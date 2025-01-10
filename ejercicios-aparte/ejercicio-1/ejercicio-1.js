const parrafo = document.querySelector('p')
const boton = document.querySelector('button')
let contador = 0

boton.addEventListener('click', function() {
    if (contador === 9) {
        contador++;
        parrafo.textContent = `Contador: ${contador}`
        setTimeout(function() {
            alert('Ganaste!')
            contador = 0
            parrafo.textContent = `Contador: ${contador}`
        }, 500)
        
    } else if (contador < 10) {
        contador++;
        parrafo.textContent = `Contador: ${contador}`
    }
})