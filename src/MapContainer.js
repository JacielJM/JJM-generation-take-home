import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

/* Seguí paso a paso la documentación de google-maps-react en NPM y aún así no logré mostrar el mapa.
	Sin embargo si logré mostrar otros componentes siguiendo la idea componentizada de React.
*/
class MapContainer extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={8}
				initialCenter={{ lat: 19.3910036, lng: -99.2840436 }}
			>
				<Marker position={{ lat: 19.4, lng: -99.3 }} />
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyD7rKW7drtxjK98Yg2pwtacavNzzVtpgUc',
})(MapContainer);
