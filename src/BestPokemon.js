import React from "react";

const BestPokemon = (props) => {
  // const [favPokemon, setFavPokemon] = useState(true);

  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
  //     .then((response) => response.json())
  //     .then((data) => setPokemonData(data))
  //     .catch((error) => console.log(error));
  // }, [props.pokemonId]);

  const powers = props.abilities.map((ability) => (
    <li key={ability}>{ability}</li>
  ));
  return (
    <div>
      <p>My favorite Pokemon is Ninetales</p>
      <ul>{powers}</ul>
    </div>
  );
};

export default BestPokemon;
