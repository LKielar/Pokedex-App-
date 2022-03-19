import React from 'react';
import './PokemonList.css';
import Pokemon from './Pokemon.js';

const PokemonList = ({ pokemons, filteredPokemons, valueLength }) => {
	const array = filteredPokemons.length ? filteredPokemons : pokemons;
	
	return (
		<ul className='pokemon-list'>
			{valueLength && filteredPokemons.length === 0
				? 'Pokemon not found..'
				: array.map(({ name, url }) => (
						<Pokemon name={name} url={url} key={name} />
				  ))}
		</ul>
	);
};

export default PokemonList;
