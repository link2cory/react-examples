import React from "react";
import { useSWRInfinite } from "swr";

import Pokemon from "../Pokemon";

import { PokemonListContainer } from "./PokemonList.styles";

const POKEMON_PER_LOAD = 20;

const PokemonList = ({}) => {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => {
      console.log(index);
      return `https://pokeapi.co/api/v2/pokemon?offset=${
        index * POKEMON_PER_LOAD
      }&limit=${POKEMON_PER_LOAD}`;
    },
    (url) => fetch(url).then((r) => r.json())
  );

  if (error) {
    return <div>Error fetching Pokemon List</div>;
  }

  if (!data) {
    return <div>Loading Pokemon List</div>;
  }

  return (
    <PokemonListContainer>
      {data.map((pokemonLoad) =>
        pokemonLoad.results.map((pokemon) => <Pokemon id={pokemon.name} />)
      )}
      <button
        onClick={() => setSize(size + 1)}
        style={{ width: "100%", height: "100%" }}
      >
        Load More
      </button>
    </PokemonListContainer>
  );
};

export default PokemonList;
