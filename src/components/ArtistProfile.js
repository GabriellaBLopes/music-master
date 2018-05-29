import React, { Component } from 'react';

export default class ArtistProfile extends Component {

	state = {

		id: "",
		name: "",
		image: "",
		numberOfFans: "",
	}

	componentDidMount = () => {

		this.getArtistInfo();
		console.log("componentDidMount");
	}

	componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.getArtistInfo(this.props.id);            
        }
    }

	getArtistInfo = () => {

		//retorna um artista pelo id
		fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.props.id}/`).then(response => {
			response.json().then(data => {
				this.setState({

					id: data.id,
					name: data.name,
					image: data.picture,
					numberOfFans: data.nb_fan,
				})
				console.log(`number of fans: ${data.nb_fan}`);
			})
		})
	}

	render(){

		console.log("render")
		return (
			<React.Fragment>
			<div className="Artist-profile">
			<img src={this.state.image} alt="Artist photo" className="Artist-picture" />
			<div className="Artist-info">
			<div className="Artist-name">{this.state.name}</div>
			<div className="Artist-fans">{this.state.numberOfFans} fans</div>
			</div>
			</div>
			</React.Fragment>
			)
	}
}