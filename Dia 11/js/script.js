const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_id');
const pokemonImage = document.querySelector('.pokemon_img');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
let searchPokemon = 1;

async function fetchPokemonData(pokemon) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      if (response.ok) return await response.json();
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
}

async function displayPokemonInfo(pokemon) {
    const pokemonInfo = await fetchPokemonData(pokemon);
    if (pokemonInfo) {
      pokemonImage.src = pokemonInfo.sprites.front_default;
      pokemonName.textContent = pokemonInfo.name;
      pokemonNumber.textContent = pokemonInfo.id;
      input.value = '';
      searchPokemon = pokemonInfo.id;
    } else {
      pokemonImage.style.display = 'none';
      pokemonName.textContent = 'Not found :c';
      pokemonNumber.textContent = '';
    }
}

form.addEventListener('submit', event => {
    event.preventDefault();
    displayPokemonInfo(input.value.toLowerCase());
  });
  
  buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) displayPokemonInfo(--searchPokemon);
  });
  
  buttonNext.addEventListener('click', () => {
    displayPokemonInfo(++searchPokemon);
  });
  
  displayPokemonInfo(searchPokemon);
  