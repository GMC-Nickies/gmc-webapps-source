import React, { Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
  state = { artist: null, tracks: [] };

  componentDidMount() {
    this.searchArtist('yes')
  }

  searchArtist = artistQuery => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];

          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  }

  render() {
    console.log('this.state', this.state);

    return (
      <div>
        <h2><b>Music Sampler (via Spotify)</b></h2>
        <p>Search will yield the most popular similar artist if no exact match is found.</p>
        <Search searchArtist={this.searchArtist} />
        <br />
        <h4>My recommended artists: Yes, Rush, The Strokes, The Mars Volta, Madvillain</h4>
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    ); 
  }
}

export default App;