import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const colors = {
  brand: {
    yellow: "#ffcb05",
    light_blue: "#3d7dca",
    dark_blue: "#003a70",
  },
  grass: {
    light: "#A7DB8D",
    medium: "#4E8234",
    dark: "#4E8234",
  },
  poison: {
    light: "#C183C1",
    medium: "#A040A0",
    dark: "#682A68",
  },
  fire: {
    light: "#F5AC78",
    medium: "#F08030",
    dark: "#9C531F",
  },
  water: {
    light: "#9DB7F5",
    medium: "#6890F0",
    dark: "#445E9C",
  },
  bug: {
    light: "#C6D16E",
    medium: "#A8B820",
    dark: "#6D7815",
  },
  normal: {
    light: "#C6C6A7",
    medium: "#A8A878",
    dark: "#6D6D4E",
  },
  flying: {
    light: "#C6B7F5",
    medium: "#A890F0",
    dark: "#6D5E9C",
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
  background-color: ${(props) => colors[props.pokemonType].dark};
  cursor: pointer;
  color: white;
  padding: 5px;
  margin: 5px;
  text-align: center;
  border: none;
  border-radius: 10px;
  text-transform: capitalize;
`;
