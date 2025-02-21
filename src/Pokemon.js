import { useQuery } from 'react-query';
import './Pokemon.css';

const url = new URL(window.location.href);
const params = url.searchParams;
const id = params.get('id') ? params.get('id') : 1;

const fetchPokemon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  if (res.ok){ return res.json(); }
  throw new Error(res.statusText);
};

export default function Pokemon() {
  const { data } = useQuery('pokemon', fetchPokemon);
  const abilities = [];
  const types = [];

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
