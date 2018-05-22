import React, { Component } from 'react';
import Track from './Track';

export default class MusicGallery extends Component {

	state = {

		artistID: "",
		tracklist: [],
	}

	componentDidMount = () => {

		this.getArtistTrackIDs();
	}

	componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.getArtistTrackIDs(this.props.id);            
        }
    }

    getArtistTrackIDs = () => {

    	//retorna top 50 musicas do artista
		const url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.props.id}/top?limit=20`
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