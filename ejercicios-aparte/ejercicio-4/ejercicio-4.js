let formulario = document.querySelector('#form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.querySelector('#nombre');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let checkbox = document.querySelector('#checkbox');
    let errores = document.querySelectorAll('.error');
// ------------
    errores.forEach(error => {
        error.textContent = "";
        error.style.display = "none";
    });

    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("error-input");
    });

    let hayErrores = false;
// ------------
   if (nombre.value.trim()==="") {
    errores[0].textContent = "Debes ingresar un nombre";
    errores[0].style.display = "block";
    hayErrores = true;
    nombre.classList.add("error-input");
   }

   if (email.value.trim()==="") {
    errores[1].textContent = "Debes ingresar un email";
    errores[1].style.display = "block";
    hayErrores = true;
    email.classList.add("error-input");
   }
   
   if (password.value.trim()==="") {
    errores[2].textContent = "Debes ingresar una contraseña";
    errores[2].style.display = "block";
    hayErrores = true;
    password.classList.add("error-input");
   }
   
   if (!checkbox.checked) {
    errores[3].textContent = "Debes aceptar los términos y condiciones";
    errores[3].style.display = "block";
    hayErrores = true;
    checkbox.classList.add("error-input");
    }

    if (!hayErrores) {
        alert("Formulario enviado correctamente");
        formulario.reset();
        document.querySelectorAll("input").forEach(input => {
            input.classList.remove("error-input");
        });
    }
});



