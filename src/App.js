import React, { Component } from 'react';
import './App.css';
import ArtistProfile from './components/ArtistProfile';
import SearchBar from './components/SearchBar';
import MusicGallery from './components/MusicGallery';


class App extends Component {
  render() {
    return (
    <div className="App">
    <div className="App-title">Music Master</div>
    <SearchBar />
    <ArtistProfile />
    <MusicGallery />
   </div>
    );
  }
}

export default App;
