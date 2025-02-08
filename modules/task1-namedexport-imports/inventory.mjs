//inventory.mjs
//Implement inventory.mjs, exporting named functions: addItem that adds an item by name to the inventory array, removeItem that removes an item by name from the inventory array, listItems that logs all item names currently in the inventory.


const inventory = [];

export function addItem(itemName) {
  inventory.push(itemName);
  console.log(`${itemName} item added to inventory.`);
}

export function removeItem(itemName){
  const index = inventory.indexOf(itemName);
  if ( index !== -1) {
    console.log(`${itemName} has been remove from the inventoey.'`);
  } else {
    console.log(`${itemName} not found in the inventory.`);
  }
}

export function listItems(){
  console.log("current inventory:");
if (inventory.length > 0 ) {
  inventory.forEach((item, idx) => console.log(`${idx + 1}. ${item}`));
} else {
  console.log("The inventory is empty.")
  }
};

