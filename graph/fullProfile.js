// Query for complex tasks 12-15
// fetchCharacterProfile("cGVvcGxlOjE="); // Example ID for Luke Skywalker
// fetchCharactersWithPlanets();
// fetchVehiclesAndPilots();
// fetchFilmsAndEntities();

const characterProfileQuery = `
  query ($id: ID!) {
    person(id: $id) {
      name
      homeworld {
        name
      }
      filmConnection {
        films {
          title
        }
      }
      starshipConnection {
        starships {
          name
        }
      }
    }
  }
`;

// Query for characters and their homeworlds
const charactersWithPlanetsQuery = `
  query {
    allPeople(first: 5) {
      people {
        name
        homeworld {
          name
          population
        }
      }
    }
  }
`;

// Query for vehicles, their pilots, and pilots' species
const vehiclesAndPilotsQuery = `
  query {
    allVehicles(first: 3) {
      vehicles {
        name
        pilotConnection {
          pilots {
            name
            species {
              name
            }
          }
        }
      }
    }
  }
`;

// Query for films and their associated entities
const filmsAndEntitiesQuery = `
  query {
    allFilms(first: 3) {
      films {
        title
        characterConnection {
          characters {
            name
          }
        }
        planetConnection {
          planets {
            name
          }
        }
        starshipConnection {
          starships {
            name
          }
        }
      }
    }
  }
`;

// Function to fetch and display a full character profile
async function fetchCharacterProfile(characterId) {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: characterProfileQuery,
        variables: { id: characterId },
      }),
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

    const character = data.person;
    console.log('Character Profile:');
    console.log(`- Name: ${character.name}`);
    console.log(`  Homeworld: ${character.homeworld?.name || 'Unknown'}`);
    console.log('  Films:');
    if (character.filmConnection.films.length > 0) {
      character.filmConnection.films.forEach(film => console.log(`    - ${film.title}`));
    } else {
      console.log('    None');
    }
    console.log('  Starships:');
    if (character.starshipConnection.starships.length > 0) {
      character.starshipConnection.starships.forEach(starship => console.log(`    - ${starship.name}`));
    } else {
      console.log('    None');
    }
  } catch (error) {
    console.error('Error fetching character profile:', error.message);
  }
}

// Function to fetch characters and their homeworlds
async function fetchCharactersWithPlanets() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: charactersWithPlanetsQuery }),
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

    console.log('Characters and Their Planets:');
    data.allPeople.people.forEach(person => {
      console.log(`- Name: ${person.name}`);
      console.log(`  Homeworld: ${person.homeworld?.name || 'Unknown'}`);
      console.log(`  Population: ${person.homeworld?.population || 'Unknown'}`);
    });
  } catch (error) {
    console.error('Error fetching characters and their planets:', error.message);
  }
}

// Function to fetch vehicles, their pilots, and pilots' species
async function fetchVehiclesAndPilots() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: vehiclesAndPilotsQuery }),
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

    console.log('Vehicles, Their Pilots, and Pilots\' Species:');
    data.allVehicles.vehicles.forEach(vehicle => {
      console.log(`- Vehicle Name: ${vehicle.name}`);
      if (vehicle.pilotConnection.pilots.length > 0) {
        console.log('  Pilots:');
        vehicle.pilotConnection.pilots.forEach(pilot => {
          console.log(`    - Name: ${pilot.name}`);
          console.log(`      Species: ${pilot.species?.name || 'Unknown'}`);
        });
      } else {
        console.log('  No pilots for this vehicle.');
      }
    });
  } catch (error) {
    console.error('Error fetching vehicles and their pilots:', error.message);
  }
}

// Function to fetch films and their associated entities
async function fetchFilmsAndEntities() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: filmsAndEntitiesQuery }),
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

    console.log('Films and Their Associated Entities:');
    data.allFilms.films.forEach(film => {
      console.log(`- Title: ${film.title}`);

      console.log('  Characters:');
      if (film.characterConnection.characters.length > 0) {
        film.characterConnection.characters.forEach(character =>
          console.log(`    - ${character.name}`)
        );
      } else {
        console.log('    None');
      }

      console.log('  Planets:');
      if (film.planetConnection.planets.length > 0) {
        film.planetConnection.planets.forEach(planet =>
          console.log(`    - ${planet.name}`)
        );
      } else {
        console.log('    None');
      }

      console.log('  Starships:');
      if (film.starshipConnection.starships.length > 0) {
        film.starshipConnection.starships.forEach(starship =>
          console.log(`    - ${starship.name}`)
        );
      } else {
        console.log('    None');
      }
    });
  } catch (error) {
    console.error('Error fetching films and their associated entities:', error.message);
  }
}

// Run the functions
fetchCharacterProfile("cGVvcGxlOjE="); // Example ID for Luke Skywalker
fetchCharactersWithPlanets();
fetchVehiclesAndPilots();
fetchFilmsAndEntities();

