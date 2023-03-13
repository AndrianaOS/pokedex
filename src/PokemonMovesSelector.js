import React, { useState } from "react";
import PokemonMoves from "./PokemonMoves";

function PokemonMovesSelector() {
  const [id, setId] = useState(null);
  // console.log(props.pokemonData);

  // function pokeClick() {}

  function handleBulbasaurClick() {
    setId(1);
  }
  function handleSquirtleClick() {
    setId(7);
  }
  function handleCharmanderClick() {
    setId(4);
  }
  function handlePidgeyClick() {
    setId(16);
  }
  function handleCaterpieClick() {
    setId(4);
  }
  function handleRattataClick() {
    setId(19);
  }
  function handleWeedleClick() {
    setId(13);
  }
  function handleVenusaurClick() {
    setId(1);
  }

  return (
    <div>
      <section className="poke-button">
        <button onClick={handleBulbasaurClick} className="catch">
          Fetch Bulbasaur
        </button>
        <button onClick={handleSquirtleClick} className="catch">
          Fetch Squirtle
        </button>
        <button onClick={handleCharmanderClick} className="catch">
          Fetch Charmander
        </button>
        <button onClick={handlePidgeyClick} className="catch">
          Fetch Pidgey
        </button>
        <button onClick={handleCaterpieClick} className="catch">
          Fetch Caterpie
        </button>
        <button onClick={handleRattataClick} className="catch">
          Fetch Rattata
        </button>
        <button onClick={handleWeedleClick} className="catch">
          Fetch Weedle
        </button>
        <button onClick={handleVenusaurClick} className="catch">
          Fetch Venusaur
        </button>
      </section>

      {id ? <PokemonMoves pokemonId={id} /> : null}
    </div>
  );
}

export default PokemonMovesSelector;
