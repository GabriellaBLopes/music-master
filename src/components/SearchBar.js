import React, { Component } from 'react';

export default class SearchBar extends Component {

	state = {

		searchContent: "",
		result: "",
	}

	handleSearchContentChange = event => {

		this.setState({
			searchContent: event.target.value
		})
	}


	handleSearchQuery = () => {

		//busca por um artista pelo nome
		const url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${this.state.searchContent}`
		return fetch(url).then(response => {

			return response.json().then(data => {

				this.setState({

					result: data.data[0].id,
				})
				this.props.onNewSearch(this.state.result);
			})
		})
	}

	handleKeyPress = event => {
  		
  		if (event.charCode == 13) { //se for enter

    	this.handleSearchQuery()
  	}
}



  
	render(){

		console.log("render")
		return (
			<React.Fragment>
			<div className="form-group">
			<span className="input-group">
			<input placeholder="Search for an artist" type="text" className="form-control" value={this.state.searchContent} onChange={this.handleSearchContentChange} onKeyPress={this.handleKeyPress}/>
			</span>
			</div>
			</React.Fragment>
			)
		}
	}