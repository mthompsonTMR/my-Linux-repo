// Fetch all Pokémon
async function fetchAllPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');
  const data = await response.json();
  return data.results; // Returns an array of Pokémon {name, url}
}

// Fetch Pokémon details
async function fetchPokemonData(url) {
  const response = await fetch(url);
  return response.json();
}

// Fetch species description
async function fetchSpeciesDescription(speciesUrl) {
  const response = await fetch(speciesUrl);
  const data = await response.json();
  const englishEntry = data.flavor_text_entries.find(entry => entry.language.name === 'en');
  return englishEntry ? englishEntry.flavor_text.replace(/\n|\f/g, ' ') : 'No description available.';
}

// Get data for three random Pokémon
async function getRandomPokemonData() {
  const allPokemon = await fetchAllPokemon();
  
  // Pick 3 random Pokémon
  const randomPokemon = Array.from({ length: 3 }, () => {
      const randomIndex = Math.floor(Math.random() * allPokemon.length);
      return allPokemon[randomIndex];
  });

  // Fetch Pokémon details and species descriptions concurrently
  const pokemonData = await Promise.all(
      randomPokemon.map(async pokemon => {
          const data = await fetchPokemonData(pokemon.url);
          const description = await fetchSpeciesDescription(data.species.url);

          return {
              name: data.name,
              image: data.sprites.front_default,
              description
          };
      })
  );

  return pokemonData;
}

// Display Pokémon in the UI
async function displayPokemon() {
  const container = document.getElementById('pokemon-container');
  container.innerHTML = ''; // Clear previous content

  try {
      const pokemonData = await getRandomPokemonData();

      pokemonData.forEach(pokemon => {
          const card = document.createElement('div');
          card.classList.add('pokemon-card');

          card.innerHTML = `
              <img src="${pokemon.image}" alt="${pokemon.name}">
              <h3>${pokemon.name}</h3>
              <p>${pokemon.description}</p>
          `;

          container.appendChild(card);
      });
  } catch (error) {
      console.error('Error displaying Pokémon:', error.message);
      container.innerHTML = `<p>Failed to load Pokémon data. Please try again later.</p>`;
  }
}

// Add event listener to the button
document.getElementById('generate-btn').addEventListener('click', displayPokemon);
