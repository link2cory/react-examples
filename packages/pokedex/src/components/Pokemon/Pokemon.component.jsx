import React from 'react'
import useSwr from 'swr'

import './Pokemon.styles.css'

const fetcher = (url) => fetch(url).then((r) => r.json())

const Pokemon = ({ id }) => {
  const key = `https://pokeapi.co/api/v2/pokemon/${id}`
  const { data: pokemon, error } = useSwr(key, fetcher)

  if (error) {
    return <div>Error...</div>
  }

  if (!pokemon) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />
      <div>
        {pokemon.types.map((t) => (
          <h3 key={t.type.name}>{t.type.name}</h3>
        ))}
      </div>
      <h3>
        Height:
        {pokemon.height}
      </h3>
      <h3>
        Weight:
        {pokemon.weight}
      </h3>
    </div>
  )
}

export default Pokemon
