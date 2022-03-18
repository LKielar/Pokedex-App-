import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokemonList from './components/PokemonList';
import PokemonSearch from './components/PokemonSearch';

function App() {
	const [filteredPokemons, setFilteredPokemons] = useState([]);
	const [pokemons, setPokemons] = useState([]);
	const [offset, setOffset] = useState(0);
	const [valueLength, setValueLength] = useState(0);

	const searchForPokemon = (value) => {
		const filteredNames = pokemons.filter((e) => e.name.includes(value) && e.name);
		setFilteredPokemons(filteredNames);
		setValueLength(value.length)
	};

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
			.then((res) => setPokemons([...pokemons, ...res.data.results]));
	}, [offset]);

	const loadMore = () => {
		const nextOffset = offset + 20;
		setOffset(nextOffset);
	};

	return (
		<div className='App'>
			<h1>Pokedex App</h1>
			<PokemonSearch search={searchForPokemon} />
			<PokemonList pokemons={pokemons} filteredPokemons={filteredPokemons} valueLength={valueLength}/>
			<button className='load-more' onClick={loadMore}>Load more</button>
		</div>
	);
}

export default App;
