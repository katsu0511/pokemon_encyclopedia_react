import { useQuery } from 'react-query';

const fetchPokemon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`);
  if (res.ok){ return res.json(); }
  throw new Error(res.statusText);
};

export default function Pokemon() {
  const { data } = useQuery('pokemon', fetchPokemon);

  return (
    <section className='pokemon'>{data.name}</section>
  );
}
