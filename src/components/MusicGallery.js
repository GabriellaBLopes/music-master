import React, { Component } from 'react';
import Track from './Track';

export default class MusicGallery extends Component {

	state = {

		artistID: "",
		tracklist: [],
		currentPreviewURL: "", //track que está tocando agora
	}

	componentDidMount = () => {

		this.getArtistTrackIDs();
		this.audio = new Audio(this.state.currentPreviewURL);
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

    handleTracklistPlayback = (previewURL) => {


    	if (this.audio.src == previewURL){ //se for o mesmo que já ta tocando

    		if (this.audio.paused == false){
    			this.audio.pause();
    		} else {
    			this.audio.play();
    		}

    	} else{ //se for uma nova track

    		this.audio.pause();
    		this.audio.src = previewURL;
    		this.audio.play();

    	} 

    	this.setState({

    		currentPreviewURL: previewURL,
    	})

    }


    render() {
    	return (
    		<div className="Gallery">

    		{this.state.tracklist.map(track => {

    			return (
    				<Track id={track.id} onHandlePlayback={this.handleTracklistPlayback}/>
    				)
    			})}

    			</div>
    			)
    		}
    	}