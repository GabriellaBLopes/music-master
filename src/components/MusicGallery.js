import React, { Component } from 'react';
import Track from './Track';

export default class MusicGallery extends Component {

	state = {

		tracklist: [],
	}

	componentDidMount = () => {

		//retorna artista
		const url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/931/top?limit=50`
		return fetch(url).then(response => {

			return response.json().then(data => {

				this.setState({

					tracklist: data.data,
				})
			})
		})
	}

	render() {
	return (
		<div className="Gallery">

				{this.state.tracklist.map(track => {

					return (
						<Track id={track.id} />
					)
				})}

		</div>
		)
	}
	}