import React, { useState } from "react";
import PokemonMoves from "./PokemonMoves";

const pokemonNames = [
  "Bulbasaur",
  "Squirtle",
  "Charmander",
  "Pidgey",
  "Caterpie",
  "Rattata",
  "Weedle",
  "Venusaur",
];

function PokemonMovesSelector() {
  const [id, setId] = useState(null);

  const handleClick = (event) => {
    if (event.target.name === "Bulbasaur") {
      setId(1);
    } else if (event.target.name === "Squirtle") {
      setId(7);
    } else if (event.target.name === "Charmander") {
      setId(4);
    } else if (event.target.name === "Pidgey") {
      setId(16);
    } else if (event.target.name === "Caterpie") {
      setId(10);
    } else if (event.target.name === "Rattata") {
      setId(19);
    } else if (event.target.name === "Weedle") {
      setId(13);
    } else if (event.target.name === "Venusaur") {
      setId(3);
    }
  };

  return (
    <div>
      <section className="poke-button">
        {pokemonNames.map((eachName) => {
          return (
            <button
              onClick={handleClick}
              className="catch"
              name={eachName}
              key={eachName}
            >
              Fetch {eachName}
            </button>
          );
        })}
      </section>

      {id ? <PokemonMoves pokemonId={id} /> : null}
    </div>
  );
}

export default PokemonMovesSelector;
