
async function fetchPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
    if (!response.ok) {
        throw new Error(`Could not catch your Pokémon. Status: ${response.status}`);
    }

    return await response.json();
}
function renderPokemonImage(pokemonSprite) {
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
}
function handleFetchError(error) {
    console.log(error);
}

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const data = await fetchPokemonData(pokemonName);
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        renderPokemonImage(pokemonSprite);
    } catch (error) {
        handleFetchError(error);
    }
}


fetchData();



























