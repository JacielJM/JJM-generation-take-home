import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MapContainer from './MapContainer';
import Favorites from './Favorites';

/*
 * Use this component as a launching-pad to build your functionality.
 *
 */

const favorites = [];
fetch('./../store_directory.json')
	.then(r => r.json())
	.then(favoritos => {
		favorites.push(...favoritos.slice(0, 10));
		console.log(favorites);
	});
export default class YourComponent extends Component {
	render() {
		return (
			<div style={divStyle}>
				<SearchBar />
				<Favorites favorites={favorites} />
			</div>
		);
	}
}

var divStyle = {
	border: 'red',
	borderWidth: 2,
	borderStyle: 'solid',
	padding: 20,
};
