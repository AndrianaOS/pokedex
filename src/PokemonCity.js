import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    console.log(event.target.value);
    setCity(event.target.value);
  }

  return (
    <div className="city">
      <input
        type="text"
        value={city}
        onChange={updateCity}
        className="text-input"
      />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
