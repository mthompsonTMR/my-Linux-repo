//iNTERMEDIATE TASKS 5-8
// GraphQL query to fetch the first 5 characters and the starships they've piloted
// fetchCharactersAndStarships(); // Fetch characters and their starships
// fetchSpeciesAndLanguages(); // Fetch species and their languages
// fetchPlanetsAndClimates(); // Fetch planets and their climates
// fetchVehiclesAndCosts(); // Fetch vehicles and their costs

const charactersStarshipsQuery = `
  query {
    allPeople(first: 5) {
      people {
        name
        starshipConnection {
          starships {
            name
          }
        }
      }
    }
  }
`;

// GraphQL query to fetch the names and languages of 5 species
const speciesLanguagesQuery = `
  query {
    allSpecies(first: 5) {
      species {
        name
        language
      }
    }
  }
`;

// GraphQL query to fetch the names and climates of 5 planets
const planetsClimatesQuery = `
  query {
    allPlanets(first: 5) {
      planets {
        name
        climates
      }
    }
  }
`;

// GraphQL query to fetch the names and costs of 3 vehicles
const vehiclesCostsQuery = `
  query {
    allVehicles(first: 3) {
      vehicles {
        name
        costInCredits
      }
    }
  }
`;

// Function to fetch and display characters and their starships
async function fetchCharactersAndStarships() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: charactersStarshipsQuery, variables: {} }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', JSON.stringify(errors, null, 2));
      return;
    }

    // Extract and display characters with their starships
    console.log('Characters and Their Starships:');
    data.allPeople.people.forEach(person => {
      console.log(`- Name: ${person.name}`);
      if (person.starshipConnection.starships.length > 0) {
        console.log('  Starships:');
        person.starshipConnection.starships.forEach(starship => {
          console.log(`    - ${starship.name}`);
        });
      } else {
        console.log('  Starships: None');
      }
    });
  } catch (error) {
    console.error('Error fetching characters and their starships:', error.message);
  }
}

// Function to fetch and display species and their languages
async function fetchSpeciesAndLanguages() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: speciesLanguagesQuery, variables: {} }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', JSON.stringify(errors, null, 2));
      return;
    }

    // Extract and display species with their languages
    console.log('\nSpecies and Their Languages:');
    data.allSpecies.species.forEach(species => {
      console.log(`- Species: ${species.name}`);
      console.log(`  Language: ${species.language || 'Unknown'}`);
    });
  } catch (error) {
    console.error('Error fetching species and their languages:', error.message);
  }
}

// Function to fetch and display planets and their climates
async function fetchPlanetsAndClimates() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: planetsClimatesQuery, variables: {} }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', JSON.stringify(errors, null, 2));
      return;
    }

    // Extract and display planets with their climates
    console.log('\nPlanets and Their Climates:');
    data.allPlanets.planets.forEach(planet => {
      console.log(`- Planet: ${planet.name}`);
      console.log(`  Climates: ${planet.climates ? planet.climates.join(', ') : 'Unknown'}`);
    });
  } catch (error) {
    console.error('Error fetching planets and their climates:', error.message);
  }
}

// Function to fetch and display vehicles and their costs
async function fetchVehiclesAndCosts() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: vehiclesCostsQuery, variables: {} }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', JSON.stringify(errors, null, 2));
      return;
    }

    // Extract and display vehicles with their costs
    console.log('\nVehicles and Their Costs:');
    data.allVehicles.vehicles.forEach(vehicle => {
      console.log(`- Vehicle: ${vehicle.name}`);
      console.log(`  Cost in Credits: ${vehicle.costInCredits || 'Unknown'}`);
    });
  } catch (error) {
    console.error('Error fetching vehicles and their costs:', error.message);
  }
}

// Run the functions
fetchCharactersAndStarships(); // Fetch characters and their starships
fetchSpeciesAndLanguages(); // Fetch species and their languages
fetchPlanetsAndClimates(); // Fetch planets and their climates
fetchVehiclesAndCosts(); // Fetch vehicles and their costs
