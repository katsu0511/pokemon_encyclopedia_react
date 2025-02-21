import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import pokemon from './pokemon.json';

const pokemonArray = [];
pokemon.forEach(item => {
  pokemonArray.push(<option value={item.id} key={item.id}>{item.name}</option>);
});

export default function ChoosePokemon() {
  const [pokemonId, setPokemonId] = useState(1);

  const pokemonChange = () => {
    const pokemonSelect = document.getElementById('pokemon_select');
    setPokemonId(+pokemonSelect.value);
  }

  return (
    <React.Fragment>
      <select id="pokemon_select" onChange={pokemonChange}>
        {pokemonArray}
      </select>
      <Link to={`/pokemon?id=${pokemonId}`}>Show</Link>
      <Outlet />
    </React.Fragment>
  );
}
