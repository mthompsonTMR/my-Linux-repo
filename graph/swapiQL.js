// Function to fetch film titles from SWAPI GraphQL BASIC TASKS
// Query to fetch all film titles 1-4
// fetchFilmTitles();
// fetchCharacterById("cGVvcGxlOjE="); // Example ID for Luke Skywalker
// fetchPlanets();
// fetchStarships();

const filmQuery = `
  query {
    allFilms {
      films {
        title
      }
    }
  }
`;

// Query to fetch a specific character by ID
const characterQuery = `
  query ($id: ID!) {
    person(id: $id) {
      name
    }
  }
`;

// Query to fetch the names of the first 5 planets
const planetQuery = `
  query {
    allPlanets(first: 5) {
      planets {
        name
      }
    }
  }
`;

// Query to fetch the names and models of 3 starships
const starshipQuery = `
  query {
    allStarships(first: 3) {
      starships {
        name
        model
      }
    }
  }
`;

// Function to fetch all film titles
async function fetchFilmTitles() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: filmQuery }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', errors);
      return;
    }

    const films = data.allFilms.films;
    console.log('Film Titles:');
    films.forEach(film => console.log(film.title));
  } catch (error) {
    console.error('Error fetching film titles:', error.message);
  }
}

// Function to fetch a specific character by ID
async function fetchCharacterById(characterId) {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: characterQuery,
        variables: { id: characterId },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', errors);
      return;
    }

    console.log(`Character Name: ${data.person.name}`);
  } catch (error) {
    console.error('Error fetching character:', error.message);
  }
}

// Function to fetch the names of the first 5 planets
async function fetchPlanets() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: planetQuery }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', errors);
      return;
    }

    const planets = data.allPlanets.planets;
    console.log('Planet Names:');
    planets.forEach(planet => console.log(planet.name));
  } catch (error) {
    console.error('Error fetching planets:', error.message);
  }
}

// Function to fetch the names and models of 3 starships
async function fetchStarships() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: starshipQuery }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', errors);
      return;
    }

    const starships = data.allStarships.starships;
    console.log('Starships:');
    starships.forEach(starship =>
      console.log(`Name: ${starship.name}, Model: ${starship.model}`)
    );
  } catch (error) {
    console.error('Error fetching starships:', error.message);
  }
}

// Run the functions
fetchFilmTitles();
fetchCharacterById("cGVvcGxlOjE="); // Example ID for Luke Skywalker
fetchPlanets();
fetchStarships();
