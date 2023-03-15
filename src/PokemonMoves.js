import React, { useState, useEffect } from "react";

function PokemonMoves(props) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.log(error));
  }, [props.pokemonId]);

  return pokemonData ? (
    <div className="moves">
      <p>{pokemonData.name}'s moves:</p>
      <ul className="poke-moves">
        {pokemonData.moves.map((power, index) => {
          return <li key={index}>{power.move.name}</li>;
        })}
      </ul>
    </div>
  ) : null;
}

export default PokemonMoves;
