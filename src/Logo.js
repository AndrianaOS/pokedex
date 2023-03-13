import React from "react";

const Logo = (props) => {
  //   const appName = "Andriana";
  // console.log(props);

  return (
    <header>
      <h1 style={{ color: "blue" }}>Welcome to {props.appName}'s Pokedex</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png"
        alt="a pokemon"
        onClick={props.handleClick}
      />
    </header>
  );
};

export default Logo;
