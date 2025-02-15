// const tbody = document.querySelector('tbody');
// async function usersRandom() {
//     try {
//         const response = await fetch('https://67ad2bd03f5a4e1477dd018f.mockapi.io/miPagina/users');
//         const data = await response.json();
//         console.log(data);
//         data.forEach(user => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//             <td class="id">${user.id}</td>
//             <td>${user.name}</td>
//             <td>${user.email}</td>
//             <td><img src="${user.avatar}" width="100px" alt="avatar"></td>
//             <td><button class="delete-button" data-id="${user.id}" >Eliminar</button></td>`;

//             tbody.appendChild(row);
    
//         })
//     } catch (error) {
//         console.error('Error:', error);
//     }

// }

// document.querySelectorAll('.delete-button').forEach(
//     button => {
//     button.addEventListener('click', async (event) => {
//             const userId = event.target.dataset.id;
//             await user.delete(userId);
//     })
// });


// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const email = event.target.email.value;
//     const newUser = {
//         id: Date.now(),
//         name: name,
//         email: email,
//         avatar: 'https://via.placeholder.com/150'
//     };
//     fetch('https://67ad2bd03f5a4e1477dd018f.mockapi.io/miPagina/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newUser)
//     })
//    .then(response => response.json())
//    .then(data => {
//      console.log('User added:', data);
//      usersRandom();
//         form.reset();
//     })
//     .catch(error => console.error('Error:', error));
// });

// const deleteButton = document.querySelector('.delete-button');

// deleteButton.addEventListener('click', () => {
//     fetch('https://67ad2bd03f5a4e1477dd018f.mockapi.io/miPagina/users', {
//         method: 'DELETE',
//     })
//    .then(response => response.json())
//    .then(() => {
//         console.log('All users deleted');
//         location.reload();
//     })
// })


const tbody = document.querySelector('tbody');

async function usersRandom() {
    try {
        const response = await fetch('https://67ad2bd03f5a4e1477dd018f.mockapi.io/miPagina/users');
        const data = await response.json();
        console.log(data);

        tbody.innerHTML = ""; // Limpiar la tabla antes de agregar nuevos datos

        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="id">${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><img src="${user.avatar}" width="100px" alt="avatar"></td>
                <td><button class="delete-button" data-id="${user.id}">Eliminar</button></td>
            `;
            tbody.appendChild(row);
        });

        // Agregar eventos a los botones de eliminar después de crear la tabla
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', async (event) => {
                const userId = event.target.dataset.id; // Obtener el ID del usuario
                await deleteUser(userId); // Llamar a la función de eliminación
            });
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

async function deleteUser(id) {
    try {
        const response = await fetch(`https://67ad2bd03f5a4e1477dd018f.mockapi.io/miPagina/users/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el usuario');
        }

        console.log(`Usuario con ID ${id} eliminado`);
        usersRandom(); // Volver a cargar la lista de usuarios
    } catch (error) {
        console.error('Error:', error);
    }
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const newUser = {
        name: name,
        email: email,
        avatar: 'https://via.placeholder.com/150'
    };

    fetch('https://67ad2bd03f5a4e1477dd018f.mockapi.io/miPagina/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log('User added:', data);
        usersRandom();
        form.reset();
    })
    .catch(error => console.error('Error:', error));
});

// Cargar usuarios cuando se abra la página
usersRandom();