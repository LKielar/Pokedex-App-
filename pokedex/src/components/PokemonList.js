import React, { useState } from 'react';
import './PokemonList.css';
import axios from 'axios';

export default function PokemonList( {pokemon} ) {
    const [pokemonType, setPokemonType] = useState();
    const pokemonAtrributeHandler = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/1/')
        .then(res => res.data)
        .then(data => console.log(data))
    }
    pokemonAtrributeHandler()
    	return (
		<div>
			<ul className='pokemon-list'>
				{pokemon.map(({name}) => (
					<li style={{textTransform: 'capitalize'}} key={name}>
						{name}
					</li>
				))}
			</ul>
		</div>
	);
}
