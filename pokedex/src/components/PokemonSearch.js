import React from 'react';
import './PokemonSearch.css';

const PokemonSearch = ({ search }) => (
	<div className='search-box'>
		<input
			placeholder='Search by name'
			onChange={(e) => search(e.target.value)}
		/>
	</div>
);

export default PokemonSearch;
