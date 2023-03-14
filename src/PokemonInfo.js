import React from "react";
import { useParams } from "react-router-dom";

function PokemonInfo() {
  let { name } = useParams();
  return <h2>Pokemon: {name}</h2>;
}

export default PokemonInfo;
