import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = ({ name, url }) => {
	const [pokemonWeight, setPokemonWeight] = useState();
	const [pokemonHeight, setPokemonHeight] = useState();
	const [pokemonType, setPokemonType] = useState([]);
	const [pokemonSprite, setPokemonSprite] = useState();
	const [isVisible, setIsVisible] = useState(false);

	const getPokemon = () => {
		axios.get(url).then((res) => {
			setPokemonWeight(res.data.weight);
			setPokemonHeight(res.data.height);
			setPokemonSprite(res.data.sprites.front_default);
			setPokemonType(res.data.types);
		});
	};
	useEffect(() => {
		getPokemon();
	}, []);

	const pokemonTypeRender = () => {
		const pokemonTypeList = pokemonType.map((e) => e.type.name);
		if (pokemonType.length === 2) {
			return pokemonTypeList.join(', ');
		}
		return pokemonTypeList;
	};

	return (
		<li className='pokemon' key={name}>
			<div className='pokemon-container'>
				<p className='pokemon-name'>{name}</p>
				<div className='info'>
					<img src={pokemonSprite} alt='Pokemon Icon'></img>
					<div>
						<p className='pokemon-type'>Type: </p>
						<p className='value'>{pokemonType.length && pokemonTypeRender()}</p>
					</div>
				</div>
			</div>
			{isVisible ? (
				<div className='more-info'>
					<p>
						Weight: <span className='value'>{pokemonWeight}</span>
					</p>
					<p>
						Height: <span className='value'>{pokemonHeight}</span>
					</p>
				</div>
			) : (
				<button className='info-button' onClick={() => setIsVisible(true)}>
					Show more info
				</button>
			)}
		</li>
	);
};

export default Pokemon;
