//Implement storeManager.mjs that imports the functions from inventory.mjs to demonstrate adding a few items, removing an item, and then listing the remaining items in the inventory.

import { addItem, removeItem, listItems } from "./inventory.mjs"

//const {addItem, removeItem, listItems} = require('./inventory');

addItem("laptop");
addItem("Smartphone");
addItem("HeadPhones");

listItems();

removeItem("Smartphone");
listItems();