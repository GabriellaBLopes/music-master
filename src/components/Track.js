import React, { Component } from 'react';

export default class Track extends Component {


	state = {

		id: "",
		image: "",
		icon: "",
		title: "",
		previewUrl: "",
		playbackIcon: "▶",
		isPlaying: false,
		currentTimePlayback: 0,
	}


	componentDidMount() {

		this.getArtistTrack();
		console.log("componentDidMount");
	}

	componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.getArtistTrack(this.props.id);            
        }
    }

	getArtistTrack = () => {

		//retorna uma música do artista
		fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${this.props.id}/`).then(response => {
			response.json().then(data => {
				console.log(this.props.id, data)
				this.setState({

					id: data.id,
					image: data.album.cover,
					title: data.title_short,
					previewUrl: data.preview,
				})
			})
		})
	}

	handleTrackPlayback = () => {


		if (this.state.isPlaying == false){

			this.setState({

				playbackIcon: "❚❚",
				isPlaying: true,
			})

		} else{

			this.setState({

				playbackIcon: "▶",
				isPlaying: false,

			})
		}

		this.props.onHandlePlayback(this.state.previewUrl);
		
	}

	render() {
		return (
			<div className="track" id={this.state.id}>
			<img src={this.state.image} className="track-img" alt="track" />
			<div className="track-icon" onClick={this.handleTrackPlayback}>
			<div className="track-icon-text"><span>{this.state.playbackIcon}</span></div>
			</div>
			<p className="track-title">{this.state.title}</p>
			</div>
			)
	}
}