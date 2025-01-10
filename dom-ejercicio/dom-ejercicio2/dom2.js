const parrafos = document.querySelectorAll('p')
const botones = document.querySelectorAll('button')

botones.forEach((boton, index) => {
    boton.addEventListener('click', function() {
        parrafos[index].style.backgroundColor = 'red'; // Cambia el color de fondo a rojo
    });
});
