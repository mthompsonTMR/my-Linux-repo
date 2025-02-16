function Pokegame() {
  const pokemonList = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ];

  let shuffled = [...pokemonList].sort(() => Math.random() - 0.5);
  let hand1 = shuffled.slice(0, 4);
  let hand2 = shuffled.slice(4, 8);

  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemonList={hand1} totalExp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemonList={hand2} totalExp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}
