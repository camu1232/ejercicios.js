const container = document.getElementById('container');
const form = document.querySelector('form');

async function pokemonData(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await response.json();

        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Height: ${data.height} feet</p>
            <p>Weight: ${data.weight} pounds</p>`;
        container.appendChild(div);
    } catch (error) {
        console.error(error);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    container.innerHTML = '';
    const buscado = event.target.hola.value;
    pokemonData(buscado);
});
