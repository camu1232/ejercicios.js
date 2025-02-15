export const usuarios = [
        { nombre: 'Juan', 
        edad: 25, 
        email: 'juan@example.com',
        direccion: {
            calle: 'Calle 123',
            ciudad: 'Bogotá'}
        },

        { nombre: 'Maria', 
        edad: 32, 
        email:'maria@example.com',
        direccion: {
            calle: 'Carrera 456',
            ciudad: 'Medellín'}
        },

        { nombre: 'Pedro', 
        edad: 17, 
        email: 'pedro@example.com',
        direccion: {
            calle: 'Avenida 789',
            ciudad: 'Bucaramanga'}
        },
    ]


// function esMayorEdad(user) {
//     if (user.edad >= 18) {
//         console.log('es mayor de edad: ' + user.edad);
//         return true;
//     } else {
//         console.log('es menor de edad: '+ user.edad);
//         return false;
//     }
// }

export function filtrarMayores(arr) {
    return arr.filter(({edad}) => edad >= 18);
}