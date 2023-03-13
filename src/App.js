import React from "react";
import ReactDOM from "react-dom";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import "./App.css";

const rootElement = document.querySelector("#root");

function App() {
  const date = new Date().toLocaleDateString();

  function logWhenClicked() {
    console.log("This is a pokedex");
  }
  return (
    <div className="whole-page">
      <Logo appName="Andriana" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Flash-fire", "Drought"]} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

ReactDOM.render(<App />, rootElement);

export default App;
