const container = document.getElementById('pokemonContainer');

async function onePokemon(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        
        const div = document.createElement('div');
        div.innerHTML = 
        `<h2>${data.name}</h2>
        <img src='${data.sprites.front_default}' alt='${data.name}' />
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>`;

        container.appendChild(div);
        }
    catch (err) {
        console.error('Error:', err);
        return;
    }}

async function pokemonList() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
        const data = await response.json();
        data.results.forEach(pokemon => onePokemon(pokemon.name));
    } catch (err) {
        console.error('Error:', err);
        return;
    }
}

pokemonList();