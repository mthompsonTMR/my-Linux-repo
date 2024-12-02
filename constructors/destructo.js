/* Task 1: Unveiling the Coordinates */
const coordinates = {x: 34, y: 42, z: 67};
const {x, y} = coordinates;
console.log(`The x-coordinates is: ${x}`)
console.log(`The y-coordinates is: ${y}`)

/*
// TODO: Destructo has found a map with coordinates marked on it. Use object destructuring to extract the `x` and `y` coordinates from the given `coordinates` object. Print the coordinates.

/* Task 2: The Map of Secrets */
const locations = {
	first: "Cave of Wonders",
	second: "Lake of Mystery",
	third: "Mount of Ages",
	fourth: "Desert of Shadows"
};
//const {first, second, third, fourth } = locations;

// console.log(`first locaton: ${first}`);
// console.log(`second locaton: ${second}`);
// console.log(`third locaton: ${third}`);
// console.log(`fourth locaton: ${fourth}`);

//  first two are significant for the quest. Use object destructuring  

const {first, second, ...remaining } = locations;

console.log(`locaton 1: ${first}`);
console.log(`locaton 2: ${second}`);
console.log("Remaining locations", remaining);
/* Task 3: The Mysterious Door */
const doorCode = {
	upper: "Alpha",
	lower: "Omega"
};
// TODO: To open the Mysterious Door, a sequence is required, which might be incomplete. Use object destructuring to assign default values to ensure the door opens even if part of the code is missing. Make sure the `middle` defaults to one of the values from the `remaining` variable above if not provided. Print the door code sequence.
const {
	upper = "defaultUpper",
	middle = remaining.third,
	lower = "defualtLower"
} = doorCode;

console.log(`Door code sequence: Upper - ${upper}, middle - ${middle}, lower - ${lower}`)

/* Task 4: The Guardian's Riddle */
const riddle = {
	ancientWord: "Sphinx",
	modernWord: "Cat"
};

const {ancientWord: translation, modernWord } = riddle;
console.log(`translation of the riddle: ${translation}`);
console.log(`Modern interpretation: ${modernWord}`);

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];
// TODO: Inside the library, Destructo discovers an array that represents the elements needed to decipher the next clue. Use array destructuring to extract the first two elements. Print the essential elements.

const [firstElement, secondElement] = elements;

console.log(`Essential Element 1: ${firstElement}`);
console.log(`Essential Element 2: ${secondElement}`);

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];
// TODO: Crossing the River of Reflections requires skipping certain stones. Use array destructuring to extract only the first and the sixth stones. Print the extracted stones.
const [firstStone, , , , , sixthStone] = stones;

console.log(`First Stone: ${firstStone}`); 
console.log(`Sixth Stone: ${sixthStone}`); 

/* Task 7: The Array of Shadows */
const shadows = ["Darkness","Silence", " Whisper", " Echo"];
// TODO: The Cave of Shadows hides more than it reveals. Use array destructuring with the rest parameter to separate the visible shadow (which is the first) from the hidden ones. Print the visible shadow and the hidden shadows.
const [visibleShadow, ...hiddenShadows ] = shadows;

console.log(`Visable Shadow: ${visibleShadow}`);
console.log(`Hidden Shadow: ${hiddenShadows}`);

/* Task 8: The Wise Function */
// TODO: Destructo needs to decode ancient directions to continue his quest. Help him by writing a function `revealPath` that decodes and prints the direction and distance to travel. The function takes an object with `direction` and `distance` as parameters.
function revealPath({direction, distance}) {
	console.log(`Travel ${distance} untils towards the ${direction}`);
	}
 const path = {direction: "north", distance: 100};
	revealPath(path);

	/* Task 9: The Scroll of Defaults */
// TODO: Destructo finds an ancient scroll with a potion recipe, but some ingredients are missing. Write a function `mixPotion` that uses defaults "Water" and "Fireflower" for `ingredient1` and `ingredient2` if they are not specified and print those mixings. The function takes an object with these optional properties.
function mixPotion({ingredient1 = "water", ingredient2 = "fireflower"} = {}) {

		console.log(`Mixing ingredients: ${ingredient1} and ${ingredient2}`);
}
const potion1= { ingredient1: "Dragon Scale", ingredient2: "Phoenix Feather"};
const potion2 = { ingredient1: "moonnstone"};
const potion3 = [];

mixPotion(potion1);
mixPotion(potion2);
mixPotion(potion3);
mixPotion();

/* Task 10: The Array Spell */
// TODO: At the gates of an ancient library, Destructo must cast a spell with the first two ingredients from a list given to him by a wise owl. Create a function `castSpell` that uses array destructuring to access these ingredients from an array and print the spell casting.

function castSpell(ingredients) {
	const[ingredient1, ingredient2] = ingredients;
	console.log(`Casting spell with: ${ingredient1} and ${ingredient2}`);
}
 const spellIngredients = ["Feather of Phoenix", "tears of Mermaid", "Dust of Stars"];
 castSpell(spellIngredients);

 /* Task 11: The Nested Secret */
const nestedSecret = {outer: {inner: "The Final Key"}};
// TODO: Behind the final door lies a nested artifact containing the ultimate clue. Use nested destructuring to extract `The Final Key`. Print the unveiled secret.
const { outer: { inner: unveiledSecret } } = nestedSecret;
console.log(`Unveiled Secret: ${unveiledSecret}`);

/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";
// TODO: In the treasure chamber, two mystical stones control the treasure's safeguard. Use array destructuring to swap the values of `stoneA` and `stoneB`. Print the result of the swap.

[stoneA, stoneB] = [stoneB, stoneA];

console.log(`stone A: ${stoneA}`);
console.log(`stone B: ${stoneB}`);