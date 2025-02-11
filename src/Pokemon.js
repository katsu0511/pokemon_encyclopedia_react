import { useQuery } from 'react-query';

const fetchPokemon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`);
  if (res.ok){ return res.json(); }
  throw new Error(res.statusText);
};

export default function Pokemon() {
  const { data } = useQuery('pokemon', fetchPokemon);
  const abilities = [];
  const types = [];

  data.abilities.forEach((ability) => {
    abilities.push(
      <li>{ability.ability.name}</li>
    )
  });
  data.types.forEach((type) => {
    types.push(
      <li>{type.type.name}</li>
    )
  });

  return (
    <section className='pokemon'>
      <div>
        <p>No. {data.id}</p>
        <p>{data.name}</p>
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
        <div>Abilities:
          <ul>{abilities}</ul>
        </div>
        <div>Type:
        <ul>{types}</ul>
        </div>
        <img src={data.sprites.versions["generation-iii"].emerald.front_default} alt={data.name} />
      </div>
    </section>
  );
}
