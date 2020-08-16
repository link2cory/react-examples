import React from "react";
import useSwr from "swr";

import {
  PokemonContainer,
  PokemonName,
  PokemonAvatar,
  PokemonTypesContainer,
  PokemonTypeContainer,
} from "./Pokemon.styles";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Pokemon = ({ id }) => {
  const key = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const { data: pokemon, error } = useSwr(key, fetcher);

  if (error) {
    return <div>Error...</div>;
  }

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <PokemonContainer pokemonTypes={pokemon.types}>
      <PokemonName pokemonTypes={pokemon.types}>{pokemon.name}</PokemonName>
      <PokemonAvatar>
        <img src={pokemon.sprites.front_default} />
      </PokemonAvatar>
      <PokemonTypesContainer>
        {pokemon.types.map((t) => (
          <PokemonTypeContainer key={t.type.name} pokemonType={t.type.name}>
            {t.type.name}
          </PokemonTypeContainer>
        ))}
      </PokemonTypesContainer>
    </PokemonContainer>
  );
};

export default Pokemon;
