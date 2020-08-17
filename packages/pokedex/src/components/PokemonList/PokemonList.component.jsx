import React, { useEffect, useRef } from "react";
import { useSWRInfinite } from "swr";

import Pokemon from "../Pokemon";

import { PokemonListContainer } from "./PokemonList.styles";

const POKEMON_PER_LOAD = 20;

const PokemonList = ({}) => {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => {
      return `https://pokeapi.co/api/v2/pokemon?offset=${
        index * POKEMON_PER_LOAD
      }&limit=${POKEMON_PER_LOAD}`;
    },
    (url) => fetch(url).then((r) => r.json())
  );
  const loadMore = () => {
    setSize(size + 1);
  };

  const loader = React.useRef(loadMore);
  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 0.5 }
    )
  );
  const [element, setElement] = React.useState(null);

  useEffect(() => {
    loader.current = loadMore;
  }, [loadMore]);
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  if (error) {
    return <div>Error fetching Pokemon List</div>;
  }

  if (!data) {
    return <div>Loading Pokemon List</div>;
  }

  return (
    <>
      <PokemonListContainer>
        {data.map((pokemonLoad) =>
          pokemonLoad.results.map((pokemon) => <Pokemon id={pokemon.name} />)
        )}
      </PokemonListContainer>
      <div ref={setElement} style={{ width: "100%" }} />
    </>
  );
};

export default PokemonList;
