import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {

	const [pokemon, setPokemon] = useState([]);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
			.then(
				(res) =>
					console.log(...pokemon, ...res.data.results) ||
					setPokemon([...pokemon, ...res.data.results])
			);
	}, [offset]);

	const loadMore = () => {
		const nextOffset = offset + 20;
		setOffset(nextOffset);
	};

	return (
		<div className='App'>
			<h1>Pokedex App</h1>

			<PokemonList pokemon={pokemon} />
			<button className='load-more' onClick={loadMore}>Load more</button>
		</div>
	);
}

export default App;
