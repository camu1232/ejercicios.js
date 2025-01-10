const botonClear = document.querySelector('#clear')



const form = document.querySelector('form');
const tableBody = document.querySelector('tbody');
let users = JSON.parse(localStorage.getItem('users'));

if (!users) {
        users = [];
}



    function renderTable() {
        tableBody.innerHTML = '';
        users.forEach(user => { //user es el nombre que le ponemos a cada elemento del array, luego => es la función a ejecutar en cada uno de esos elementos
            const fila = document.createElement('tr');
            fila.innerHTML =
            `<td>${user.name}</td>
            <td>${user.email}</td>`;

            tableBody.appendChild(fila);
            console.log(user);
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        users.push({name: name, email: email});

        localStorage.setItem('users', JSON.stringify(users));

        renderTable();

        form.reset();
    });

    renderTable();

    botonClear.addEventListener('click', () => {
        users = [];
        localStorage.removeItem('users');
        renderTable();
    });
