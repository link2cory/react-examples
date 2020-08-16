import React from "react";
import styled from "styled-components";

export const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  cursor: pointer;
`;
