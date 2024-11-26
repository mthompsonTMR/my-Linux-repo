//1. Track Animal Sightings: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

function trackAnimalSightings(...animalNames) {
  if(animalNames.length === 0)  {
    console.log("No animals were sighted.")
    return;
  }
console.log("Animals sighted in the sanctuary:");
  animalNames.forEach((animal, index) => {
    console.log(`${index + 1}.${animal}`);

  });
}

trackAnimalSightings("elephant", "tiger", "Deer");


//2. Merge Habitat Areas: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const habitat1 = ["Rainforest", "Savannah", "Wetlands"];
const habitat2 = ["Coral Reef", "Mangrove Forest", "Tundra"];

const mergedHabitats = [...habitat1,...habitat2]
console.log("Comprehensive list of protected areas: ");
console.log(mergedHabitats.join(", "));

//3. **Update Conservation Status**: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

//define conseration status start
function updatedConservationStatus(originalStatus, updates) {
  const updated = { ...originalStatus, ...updates }; // Combine the objects
  
  // Ensure species is a string
  if (typeof updated.species !== "string") {
    updated.species = String(updated.species);
  }
  
  return updated; // Return the updated object
}

const initialStatus = {
  species: "Leopard",
  population: 4000, // Fixed spelling
  habitat: "Mountain ranges",
  status: "Vulnerable" // Capitalized for consistency
};

const newUpdates = {
  population: 4200, // Fixed spelling
  habitat: "Mountain ranges, Grasslands", // Fixed string format
  status: "Near Threatened"
};

const newStatus = updatedConservationStatus(initialStatus, newUpdates);
console.log("Updated Conservation Status: ", newStatus);

//4. **Catalog Genetic Diversity**: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the  original and the copied object.

const animalProfile = {
  name: "Tiger",
  population: 3900,
  genus: "Panthera",
  traits: { // Nested object
    behavior: "Solitary",
    diet: "Carnivore"
  }
};

// Create a shallow copy of the object using the spread operator
const animalCopy = { ...animalProfile };

// Add a genetics property to the copied object
animalCopy.genetics = {
  diversityIndex: 0.85,
  population: "stable"
};

// Modify a top-level property in the copied object
animalCopy.name = "Lion";

// Modify a nested property in the copied object
animalCopy.traits.behavior = "Social";

// Log both objects to observe the effect
console.log("Original Animal Profile:");
console.log(animalProfile);
console.log(`${animalProfile}`);
console.log("\nCopied Animal Profile with Genetics:");
console.log(animalCopy);
console.log(`${animalCopy}`);
//changes to the copied object (via a shallow copy) do not affect the original object, except when dealing with nested objects.

//5. Analyze Ecosystem Health: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.

const ecosystemHealth = {
  region: "Amazon Rainforest",
    waterQuality: {
      ph: 7.5,
      containationLevel: "low"
    },
    foodSupply: {
      avaialbability: "Abundant",
      diversity: "high"
    }

};

const copiedEcosystem = { ...ecosystemHealth }

copiedEcosystem.waterQuality.containationLevel = "Moderate";
copiedEcosystem.foodSupply.diversity = "Medium";

console.log("original Ecosystem Health:");
console.log(ecosystemHealth);

console.log("\ncopied Ecosystem Health: ");
console.log(copiedEcosystem);