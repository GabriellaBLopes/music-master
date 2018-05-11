import React, { Component } from 'react';

export default class SearchBar extends Component {

	state = {

		searchContent: "",
		data: "",
	}

	componentDidMount = () => {

		//retorna artista
		const url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=artist:%22iron%20maiden%22`
		return fetch(url).then(response => {

			return response.json().then(data => {

				this.setState({

					results: data.data,
				})
			})
		})
	}

	handleSearchContentChange = event => {

		this.setState({
			searchContent: event.target.value
		})
	}





  
	render(){

		console.log("render")
		return (
			<React.Fragment>
			<div className="form-group">
			<span className="input-group">
			<input placeholder="Search for an artist" type="text" className="form-control" value={this.state.searchContent} onChange={this.handleSearchContentChange} />
			</span>
			</div>
			</React.Fragment>
			)
		}
	}