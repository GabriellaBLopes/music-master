import React, { Component } from 'react';

export default class ArtistProfile extends Component {

	render(){

		console.log("render")
		return (
			<React.Fragment>
			<div className="Artist-profile">
			<img src="https://e-cdns-images.dzcdn.net/images/artist/082f3e7d6f3f0ae104a4da93c97273d7/500x500-000000-80-0-0.jpg" alt="Iron Maiden" className="Artist-picture" />
			<div className="Artist-info">
			<div className="Artist-name">Iron Maiden</div>
			<div className="Artist-fans">1942493 fans</div>
			</div>
			</div>
			</React.Fragment>
			)
	}
}