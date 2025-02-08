const mythicalCreatures = [
    { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
    { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
    { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
    { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
    { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" }
];

// Find a creature by type
const findByType = mythicalCreatures.find(function(creature)
    {
    return creature.type === "Water"
 });
    console.log(findByType);

// Find a creature by index, Griffin
const findIDXCreature = mythicalCreatures.findIndex(function(creature)
    {
         return creature.name === "Griffin";
 });
console.log(findIDXCreature);

// find first creature seen in enchanted forest
const findByLastSeen = mythicalCreatures.find(function(creature) 
    {
    return creature.lastSeen === "Enchanted Forest";
});
console.log(findByLastSeen);