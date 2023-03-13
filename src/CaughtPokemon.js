import React, { useState } from "react";

const randomPokemon = [
  "Pikachu",
  "Squirtle",
  "Bulbasaur",
  "Charmander",
  "Ivysaur",
  "Blastoise",
  "Butterfree",
  "Weedle",
  "Rattata",
  "Caterpie",
  "Ninetales",
];

const CaughtPokemon = ({ date }) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  function catchPokemon() {
    const randomValue = Math.floor(Math.random() * randomPokemon.length);
    const randomIndex = randomPokemon[randomValue];
    if (pokemonNameInput === "") {
      setCaught(caught.concat(randomIndex));
    } else {
      setCaught(caught.concat(pokemonNameInput));
    }
  }

  return (
    <div>
      <p className="catch-text">
        Caught {caught.length} Pokemon on {date}
      </p>
      <input
        type="text"
        onChange={handleInputChange}
        value={pokemonNameInput}
        className="text-input"
      />
      <button onClick={catchPokemon} className="catch">
        Catch Pokemon
      </button>
      <ul>
        {caught.map((pokemon, index) => {
          return <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
