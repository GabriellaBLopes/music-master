import React, { Component } from 'react';
import './App.css';
import ArtistProfile from './components/ArtistProfile';
import SearchBar from './components/SearchBar';
import MusicGallery from './components/MusicGallery';


class App extends Component {

  state = {

    artistID: "931",
  }


  handleSearchResult = (artistID) => {

    this.setState({

      artistID: artistID,
    });
    console.log(`artist id is ${this.state.artistID}`);
  }

  render() {
    return (
      <div className="App">
      <div className="App-title">Music Master</div>
      <SearchBar onNewSearch={this.handleSearchResult}/>
      <ArtistProfile id={this.state.artistID}/>
      <MusicGallery id={this.state.artistID}/>
      </div>
      );
  }
}

export default App;
