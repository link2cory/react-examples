[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# React Examples
This repository is a monorepo where each subdirectory of packages represents a separate react project as follows:

## [Pokedex](packages/pokedex) 
A simple Pokedex implementation powered by the [Pokeapi](https://pokeapi.co) This Pokedex is concerned only with the video game series.

**Description**
In its current state this project is extremely simple.  It was an opportunity for me to play with REST Api consumption using react hooks (specifically SWR(https://swr.vercel.app/) although I now understand that SWR is probably not the most appropriate library to use because the data in question is almost entirely static.  The application fetches Pokemon data sequentially starting from Pokemon#1 and implements an infinite scrolling feature such that when the user scrolls down the page a new batch of pokemon are fetched and presented.  The fetched Pokemon data is actually much more comprehensive than what is currently being represented.  If you are familiar with the Pokemon series of video games, you might know that Pokemon are actually quite complex.

**Next Steps**
- Add detail view for the Pokemon.  This view should present some or possibly all of the available data for the given Pokemon.
