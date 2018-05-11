import React, { Component } from 'react';

export default class Track extends Component {

	state = {

		id: "",
		image: "",
		icon: "",
		title: "",
	}

	componentDidMount() {

		fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${this.props.id}/`).then(response => {
			response.json().then(data => {
				this.setState({

					id: data.id,
					image: data.album.cover,
					title: data.title_short,
				})
				console.log(data)
			})
		})
		console.log("componentDidMount")
	}

	render() {
		return (
			<div className="track" id={this.state.id}>
			<img src={this.state.image} className="track-img" alt="track" />
			<div className="track-icon">
			<div className="track-icon-text"><span>▶</span></div>
			</div>
			<p className="track-title">{this.state.title}</p>
			</div>
			)
	}
}