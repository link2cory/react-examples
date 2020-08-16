import React from 'react'
import useSwr from 'swr'

import Pokemon from '../Pokemon'

import './PokemonList.styles.css'

const fetcher = (url) => fetch(url).then((r) => r.json())

const PokemonList = ({}) => {
  const key = 'https://pokeapi.co/api/v2/pokemon/'
  const { data: pokemonList, error } = useSwr(key, fetcher)

  if (error) {
    return <div>Error fetching Pokemon List</div>
  }

  if (!pokemonList) {
    return <div>Loading Pokemon List</div>
  }

  return (
    <div className='pokemonlist-container'>
      {pokemonList.results.map((pokemon) => (
        <Pokemon id={pokemon.name} />
      ))}
    </div>
  )
}

export default PokemonList
