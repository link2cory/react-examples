import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const colors = {
  brand: {
    yellow: "#ffcb05",
    light_blue: "#3d7dca",
    dark_blue: "#003a70",
  },
  bug: {
    light: "#C6D16E",
    medium: "#A8B820",
    dark: "#6D7815",
  },
  dark: {
    light: "#A29288",
    medium: "#705848",
    dark: "#49392F",
  },
  dragon: {
    light: "#A27DFA",
    medium: "#7038F8",
    dark: "#4924A1",
  },
  electric: {
    light: "#FAE078",
    medium: "#F8D030",
    dark: "#A1871F",
  },
  fairy: {
    light: "#F4BDC9",
    medium: "#EE99AC",
    dark: "#9B6470",
  },
  fighting: {
    light: "#D67873",
    medium: "#C03028",
    dark: "#7D1F1A",
  },
  fire: {
    light: "#F5AC78",
    medium: "#F08030",
    dark: "#9C531F",
  },
  flying: {
    light: "#C6B7F5",
    medium: "#A890F0",
    dark: "#6D5E9C",
  },
  ghost: {
    light: "#A292BC",
    medium: "#705898",
    dark: "#493963",
  },
  grass: {
    light: "#A7DB8D",
    medium: "#4E8234",
    dark: "#4E8234",
  },
  ground: {
    light: "#EBD69D",
    medium: "#E0C068",
    dark: "#927D44",
  },
  ice: {
    light: "#BCE6E6",
    medium: "#98D8D8",
    dark: "#638D8D",
  },
  normal: {
    light: "#C6C6A7",
    medium: "#A8A878",
    dark: "#6D6D4E",
  },
  poison: {
    light: "#C183C1",
    medium: "#A040A0",
    dark: "#682A68",
  },
  psychic: {
    light: "#FA92B2",
    medium: "#F85888",
    dark: "#A13959",
  },
  rock: {
    light: "#D1C17D",
    medium: "#B8A038",
    dark: "#786824",
  },
  steel: {
    light: "#D1D1E0",
    medium: "#B8B8D0",
    dark: "#787887",
  },
  water: {
    light: "#9DB7F5",
    medium: "#6890F0",
    dark: "#445E9C",
  },
};

// background: ${(props) => colors[props.pokemonTypes[0].type.name].medium};
export const PokemonContainer = styled(motion.div)`
  background: ${colors.brand.light_blue};
  box-shadow: 1px 1px 1px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  width: 100%;
  height: 100%;

  &:hover {
    z-index: 999;
  }
`;

export const PokemonAvatar = styled.div`
  background: ${colors.brand.light_blue};
  border-radius: 50%;
`;

export const PokemonName = styled.h1`
  text-transform: capitalize;
  font-size: 1rem;
`;

export const PokemonTypesContainer = styled.div`
  display: flex;
`;

export const PokemonTypeContainer = styled.button`
  background-color: ${(props) =>
    colors[props.pokemonType] ? colors[props.pokemonType].dark : "black"};
  cursor: pointer;
  color: white;
  padding: 5px;
  margin: 5px;
  text-align: center;
  border: none;
  border-radius: 10px;
  text-transform: capitalize;
`;
