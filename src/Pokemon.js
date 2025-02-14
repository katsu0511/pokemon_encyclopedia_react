import { useState } from "react";
import { useQuery } from 'react-query';
import pokemon from './pokemon.json';
import './Pokemon.css';

const pokemonArray = [];
pokemon.forEach(item => {
  pokemonArray.push(<option value={item.id} key={item.id}>{item.name}</option>);
});

export default function Pokemon() {
  const [pokemonId, setPokemonId] = useState(1);
  const abilities = [];
  const types = [];

  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
    if (res.ok){ return res.json(); }
    throw new Error(res.statusText);
  };

  const pokemonChange = () => {
    const pokemonSelect = document.getElementById('pokemon_select');
    setPokemonId(+pokemonSelect.value);
    alert('pokemon changed');
  }

  const { data } = useQuery('pokemon', fetchPokemon);

  data.abilities.forEach((ability) => {
    abilities.push(
      <li key={ability.ability.name}>{ability.ability.name}</li>
    )
  });

  data.types.forEach((type) => {
    types.push(
      <li key={type.type.name}>{type.type.name}</li>
    )
  });

  return (
    <div>
      <select id="pokemon_select" onChange={pokemonChange}>
        {pokemonArray}
      </select>
      <section className='pokemon'>
        <div className='top_info'>
          <div className='image_frame'>
            <img src={data.sprites.versions["generation-iii"].emerald.front_default} alt={data.name} />
          </div>
          <div className='details'>
            <p>No. {data.id}</p>
            <p>{data.name}</p>
            <div>Type:
              <ul>{types}</ul>
            </div>
          </div>
        </div>
        <div className='other_info'>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
          <div>Abilities:
            <ul>{abilities}</ul>
          </div>
        </div>
      </section>
    </div>
  );
}
