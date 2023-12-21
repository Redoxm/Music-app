import React, {Component} from "react";
import './App.css';
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";
import Spotify from "../Utils/Spotify";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SearchResults: [],
      playlistName: "New Playlist",
      playlistTracks: [],
    };
    
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.removeTrackSearch = this.removeTrackSearch.bind(this);
    this.doThese = this.doThese.bind(this);
  }

  search(term) {
    Spotify.search(term).then(SearchResults => {
      this.setState({SearchResults: SearchResults});
    })
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }
 
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let trackSearch = this.state.SearchResults;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    trackSearch.unshift(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrackSearch(track) {
    let tracks = this.state.SearchResults;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({SearchResults: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  doThese(track) {
    this.addTrack(track);
    this.removeTrackSearch(track);
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],
      })
    }).catch(error => {
      console.error("Error saving playlist:", error);
  });
  }


  render() {
    return(
      <div>
          <h1>
            <a href="http://localhost:3000">MusicSphere</a>
          </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
        </div>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.SearchResults} onAdd={this.doThese}/>
          <Playlist playlistTracks={this.state.playlistTracks} 
            onNameChange={this.updatePlaylistName}
            onRemove={this.removeTrack} 
            onSave={this.savePlaylist} />
        </div>
      </div>
    )
  }

}

export default App;