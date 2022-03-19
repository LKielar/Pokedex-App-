import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PokemonList from './components/PokemonList';
import PokemonSearch from './components/PokemonSearch';

const App = () => {
	const [filteredPokemons, setFilteredPokemons] = useState([]);
	const [pokemons, setPokemons] = useState([]);
	const [offset, setOffset] = useState(0);
	const [valueLength, setValueLength] = useState(0);
	const [loader, setLoader] = useState(true);

	const searchForPokemon = (value) => {
		const filteredNames = pokemons.filter(
			(e) => e.name.includes(value) && e.name
		);
		setFilteredPokemons(filteredNames);
		setValueLength(value.length);
	};

	useEffect(() => {
		setLoader(true);
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
			.then((res) => setPokemons([...pokemons, ...res.data.results]));
		    setLoader(false);
	}, [offset]);

	const loadMore = () => {
		const nextOffset = offset + 20;
		setOffset(nextOffset);
	};

	if(loader) return 'Loading..';
	return (
		<div className='App'>
			<h1>Pokedex App</h1>
			<PokemonSearch search={searchForPokemon} />
			{loader ? (
				<h2>Loading..</h2>
			) : (
				<>
					<PokemonList
						pokemons={pokemons}
						filteredPokemons={filteredPokemons}
						valueLength={valueLength}
					/>
				</>
			)}
			<button className='load-more' onClick={loadMore}>
				Load more
			</button>
		</div>
	);
};

export default App;
