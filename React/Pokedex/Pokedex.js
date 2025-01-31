function Pokedex({ pokemonList, totalExp, isWinner }) {
  return (
    <div className={`pokedex ${isWinner ? "winner" : "loser"}`}>
      <h2>{isWinner ? "🎉 THIS HAND WINS! 🎉" : "Try Again!"}</h2>
      <h3>Total Experience: {totalExp}</h3>
      <div className="pokedex-cards">
        {pokemonList.map(pokemon => (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
}
