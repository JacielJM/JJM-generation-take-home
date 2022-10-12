import React, { Component } from 'react';
import Favorite from './Favorite';

export default class Favorites extends Component {
	constructor(props) {
		super(props);
		this.favorites = this.props.favorites;
	}

	render() {
		if (this.favorites) {
			return (
				<div className="favorites">
					<h4>Favorites</h4>
					{this.favorites.map(f => (
						<Favorite name={f.Name} address={f.Address} />
					))}
				</div>
			);
		} else {
			return <div>Sin favoritos</div>;
		}
	}
}
