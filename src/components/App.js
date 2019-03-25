import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { getArtists } from '../services/api';
import ClearIcon from '@material-ui/icons/Clear';
import {
  TextField,
  Button,
  List
} from '@material-ui/core';
import ArtistCard from './ArtistCard';
import { SearchResult } from './SearchResult';


// change "clear" button to 'x' inside input
// if artist already fav change fav button to unfav
// modal on fav artist delete
// Responsive ArtistsCard
// No duplicates allowed - done
// Rating - done
// Format listeners number - done
// Codrin: sistem de tracking al activitatii pe internet
// Component lifecycle: constructor(), componentDidMount(), render(), componentWillUnmount(), componentDidCatch()

const isEmpty = (str) => str.length === 0;

class App extends Component {
  state = {
    searchTerm: '',
    savedArtists: []
  }

  componentDidMount() {
    const existing = localStorage.getItem('savedArtists')
    if (existing) {
      this.setState({ savedArtists: JSON.parse(existing) })
    }
  }

  onTextChange = (event) => {
    const value = event.target.value;

    this.setState({ searchTerm: value });
  }

  search = async (terms) => {
    const artists = await getArtists(terms);
    this.setState({ artists: artists })
  }

  onSearchClick = () => {
    this.search(this.state.searchTerm);
  }

  clearSearch = () => {
    this.setState({
      searchTerm: '',
      artists: []
    })
  }

  updateArtists = (newArtists) => {
    this.setState({ savedArtists: newArtists })
    localStorage.setItem('savedArtists', JSON.stringify(newArtists));
  }

  deleteArtist = (artist) => {
    const result = this.state.savedArtists.filter(item => item.name !== artist.name);
    this.updateArtists(result);
  }

  onResultClick = (artist) => {
    this.clearSearch();
    const savedArtists = this.state.savedArtists;
    const alreadyExists = this.state.savedArtists.find(item => item.name === artist.name)
    if (!alreadyExists) {
      savedArtists.push({ ...artist, rating: null });
      this.updateArtists(savedArtists);

    } else {
      console.log('artist already saved')
    }
  }

  handleRating = (rating, artist) => {
    artist.rating = rating
    this.updateArtists(this.state.savedArtists);
  }

  render() {
    const results = this.state.artists || [];
    return (
      <div className="App">
        <header className="app-header">
          <AppBar
            position="static"
            color="primary">
            <Toolbar className="search-bar content-container">
              <Typography variant="h6" color="inherit">
                Music List
              </Typography>
              <div className="search-container">
                <TextField
                  placeholder="Search on Last.fm"
                  className="search-input"
                  onChange={this.onTextChange}
                  value={this.state.searchTerm}
                />
                {!isEmpty(this.state.searchTerm) && (
                  <ClearIcon className="button--clear"
                    onClick={this.clearSearch} />
                )}
              </div>


              <Button
                onClick={this.onSearchClick}
                variant="contained"
                color="secondary"
                disabled={isEmpty(this.state.searchTerm)}
              >
                Search
              </Button>
            </Toolbar>
          </AppBar>
        </header>
        <div className="content-container">
          <List className="search-results">
            {
              results.map((artist, index) => {
                return <SearchResult key={index} artist={artist} onResultClick={this.onResultClick} />
              })
            }
          </List>
        </div>

        <div className="artist-container content-container">
          {
            this.state.savedArtists.map((artist, index) => {
              return <ArtistCard
                handleRating={this.handleRating}
                artist={artist}
                key={index}
                deleteArtist={this.deleteArtist}
              />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
