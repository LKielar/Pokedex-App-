import React from 'react';
import './PokemonList.css';
import Pokemon from './Pokemon.js'

const PokemonList = ({ pokemons, filteredPokemons, valueLenght}) => {
	
	const array = filteredPokemons.length ? filteredPokemons : pokemons;


	return (
		<div>
			<ul className='pokemon-list'>
				{valueLenght && filteredPokemons === [] ? 'No pokemon' : (
					array.map(({ name, url }) => (
						<Pokemon name={name} url={url} key={name}/>
					))
				) }
			</ul>
		</div>
	);
}

export default PokemonList;