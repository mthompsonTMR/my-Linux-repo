// queries for ADVANCED TASKS NO3
// Example usage 9-11
// fetchCharactersInFilm("ZmlsbXM6MQ=="); // Fetch characters in "A New Hope" (ID: ZmlsbXM6MQ==)
// fetchMultiFilmCharacters(); // Find characters appearing in multiple films
// fetchAggregateFilmStatistics(); // Calculate total number of characters across all films

const charactersInFilmQuery = `
  query ($id: ID!) {
    film(id: $id) {
      title
      characterConnection {
        characters {
          name
        }
      }
    }
  }
`;

// Query to fetch characters with their film appearances
const multiFilmCharactersQuery = `
  query {
    allPeople {
      people {
        name
        filmConnection {
          films {
            title
          }
        }
      }
    }
  }
`;

// Query to fetch aggregate film statistics
const filmStatisticsQuery = `
  query {
    allFilms {
      films {
        title
        characterConnection {
          characters {
            name
          }
        }
      }
    }
  }
`;

// Function to fetch all characters appearing in a specific film
async function fetchCharactersInFilm(filmId) {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: charactersInFilmQuery,
        variables: { id: filmId },
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

    // Extract and display characters in the specified film
    const film = data.film;
    console.log(`Characters in Film: ${film.title}`);
    film.characterConnection.characters.forEach(character => {
      console.log(`- ${character.name}`);
    });
  } catch (error) {
    console.error('Error fetching characters in film:', error.message);
  }
}

// Function to fetch and display characters appearing in multiple films
async function fetchMultiFilmCharacters() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: multiFilmCharactersQuery }),
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

    // Extract characters and filter those appearing in more than one film
    const multiFilmCharacters = data.allPeople.people.filter(
      person => person.filmConnection.films.length > 1
    );

    // Display the results
    console.log('Characters Appearing in More Than One Film:');
    multiFilmCharacters.forEach(person => {
      console.log(`- Name: ${person.name}`);
      console.log('  Films:');
      person.filmConnection.films.forEach(film => {
        console.log(`    - ${film.title}`);
      });
    });
  } catch (error) {
    console.error('Error fetching multi-film characters:', error.message);
  }
}

// Function to calculate and display aggregate film statistics
async function fetchAggregateFilmStatistics() {
  try {
    const response = await fetch('https://swapi-graphql.netlify.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: filmStatisticsQuery }),
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

    // Calculate total number of characters across all films
    const totalCharacters = data.allFilms.films.reduce((sum, film) => {
      return sum + film.characterConnection.characters.length;
    }, 0);

    // Display the results
    console.log(`Total Number of Characters Across All Films: ${totalCharacters}`);
  } catch (error) {
    console.error('Error fetching aggregate film statistics:', error.message);
  }
}

// Example usage
fetchCharactersInFilm("ZmlsbXM6MQ=="); // Fetch characters in "A New Hope" (ID: ZmlsbXM6MQ==)
fetchMultiFilmCharacters(); // Find characters appearing in multiple films
fetchAggregateFilmStatistics(); // Calculate total number of characters across all films
