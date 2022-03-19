import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pokemon.css';

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
			<p className='pokemon-name'>{name}</p>
			<div className='info'>
				<img src={pokemonSprite} alt='Pokemon Icon'></img>
				<div>
					<p className='pokemon-type'>Type: </p>
					<p className='value'>{pokemonType.length && pokemonTypeRender()}</p>
				</div>
			</div>
			<div className='more-info-container'>
				{isVisible ? (
					<div className='more-info'>
						<p className={isVisible === true ? 'activeLeft' : undefined}>
							Weight: <span className='value'>{pokemonWeight}</span>
						</p>
						<p className={isVisible === true ? 'activeRight' : undefined}>
							Height: <span className='value'>{pokemonHeight}</span>
						</p>
					</div>
				) : (
					<button className='info-button' onClick={() => setIsVisible(true)}>
						Show more info
					</button>
				)}
			</div>
		</li>
	);
};

export default Pokemon;
