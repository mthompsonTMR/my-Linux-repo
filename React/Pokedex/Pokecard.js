function Pokecard({ id, name, type, base_experience }) {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokecard">
      <h3>{name}</h3>
      <img src={imgSrc} alt={name} />
      <p><strong>Type:</strong> {type}</p>
      <p><strong>EXP:</strong> {base_experience}</p>
    </div>
  );
}

