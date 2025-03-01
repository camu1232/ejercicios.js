const btnMostrar = document.querySelector('button.btn.btn-primary');

const alerta = document.querySelector('div.alert.alert-primary');

btnMostrar.addEventListener('click', function(event) {
    event.preventDefault();

    if (alerta.classList.contains('d-none')) {
        alerta.classList.remove('d-none');

    } else {
        alerta.classList.add('d-none');
    }

});

// ----------------------------------------------------------------

