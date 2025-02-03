// ignorar :||
const input = document.querySelector('input[type="text"]');
const btnAgregar = document.querySelector('input[type="submit"]');
const lista = document.querySelector('ol');

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

function guardarTareas() {
localStorage.setItem('tareas', JSON.stringify(tareas));
}

function agregarTarea() {
    const tarea = input.value.trim();
    if (tarea.trim() === '') {
        alert('Ingrese una tarea válida');
        return;
    }

    const li = document.createElement('li');
    li.textContent = tarea;
    lista.appendChild(li);
    input.value = '';
    tareas.push(tarea);
    guardarTareas();

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'X';
    li.appendChild(btnEliminar);
    btnEliminar.classList.add('eliminar');
    btnEliminar.addEventListener('click', function() {
        lista.removeChild(li);
    });
}

function cargarTareas() {
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = tarea;
        lista.appendChild(li);
    
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'X';
        li.appendChild(btnEliminar);
        btnEliminar.classList.add('eliminar');
        btnEliminar.addEventListener('click', function() {
            lista.removeChild(li);
            tareas = tareas.filter(t => t!== tarea);
            guardarTareas();
        });
    });
}

btnAgregar.addEventListener('click', function(event) {
    event.preventDefault();
    agregarTarea();
});

cargarTareas();

