import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import PokemonInfo from "./PokemonInfo";
import Footer from "./Footer";
import "./App.css";

const rootElement = document.querySelector("#root");

function App() {
  const abilities = ["Flash-fire", "Drought"];
  const date = new Date().toLocaleDateString();

  function logWhenClicked() {
    console.log("This is a pokedex");
  }

  return (
    <BrowserRouter>
      <div className="whole-page">
        <Logo appName="Andriana" handleClick={logWhenClicked} />

        <section className="pokemon">
          <Link to="/best-pokemon" className="best">
            Best Pokemon
          </Link>
          <Link to="/caught-pokemon" className="caught">
            Caught Pokemon
          </Link>
          {/* <Link></Link> */}
        </section>

        <Routes>
          <Route
            element={<BestPokemon abilities={abilities} />}
            path="/best-pokemon"
          />
          <Route
            element={<CaughtPokemon date={date} />}
            path="/caught-pokemon"
          />
          <Route element={<PokemonInfo />} path="/pokemon/:name" />
        </Routes>
        {/* <BestPokemon abilities={["Flash-fire", "Drought"]} />
        <CaughtPokemon date={date} /> */}
        <PokemonMovesSelector />
        <PokemonCity />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, rootElement);

export default App;
