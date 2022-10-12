import React, { Component } from 'react';

export default class Favorite extends Component {
	constructor(props) {
		super(props);
		this.name = this.props.name;
		this.address = this.props.address;
	}
	render() {
		return (
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{this.name}</h5>
					<div className="row">
						<div className="col-sm-4 col-md-4 col-lg-4">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Asperiores repudiandae quo vitae saepe sint ipsam in, dicta non?
								Corporis non porro modi placeat vel iure aspernatur pariatur
								voluptate sit est.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
