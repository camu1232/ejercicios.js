const button = document.querySelector('button');
const buttonAlert = document.querySelector('#alert-container');

button.addEventListener('click', () => {
    location.reload();
});

new gridjs.Grid({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
  ]
}).render(document.getElementById("wrapper"));

buttonAlert.addEventListener("click", ()=> {
    Swal.fire({
      title: 'Bienvenido',
      iconColor: '#e480c3',
      // toast: true,
      target: 'page',
      input: 'text',
      background: '#edede9',
      position: 'top',
      text: 'Cómo te llamas?',
      icon: 'question',
      confirmButtonText: 'Listo!',
      heightAuto: false,
      allowOutsideClick: false,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Debes ingresar un nombre';
        }
        return null; // No hay error
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Hola ${result.value}!`,
          icon: 'success',
          background: '#edede9',
          position: 'top',
          confirmButtonText: 'Aceptar',
          heightAuto: false
        });
      }
    })
    
});
// ------------
const ctx = document.getElementById('grafico').getContext('2d');

// Datos del gráfico
const data = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'], // Etiquetas del eje X
    datasets: [{
        label: 'Temperatura (°C)', // Etiqueta del dataset
        data: [10, 20, 15, 25, 30], // Datos para cada etiqueta
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de fondo
        borderColor: 'rgba(75, 192, 192, 1)', // Color del borde
        borderWidth: 1 // Ancho del borde
    },
    {
      label: 'Temperatura(°F)', // Etiqueta del dataset
        data: [50, 100, 70, 120, 150], // Datos para cada etiqueta
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1 // Ancho del borde
    }
  ]
};

// Configuración del gráfico
const config = {
    type: 'line', // Tipo de gráfico (barras)
    data: data, // Datos del gráfico
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Temperatura en el día de hoy' // Título del gráfico
        }
      },
        scales: {
            y: {
                beginAtZero: true // Empieza el eje Y en 0
            }
        }
    }
};

// Crear el gráfico
const myChart = new Chart(ctx, config);