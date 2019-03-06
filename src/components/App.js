import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {
    TextField,
    Button,
    List,
    Card,
    CardContent
} from '@material-ui/core';
import getArtists from '../services/api'
import ArtistCard from './ArtistCard'
import SearchResult from './SearchResult'


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
        const data = await getArtists(terms)
        const results = data.data.results;
        const artists = results.artistmatches.artist.map((artist) => {
            const avatarImage = artist.image.find(image => image.size === 'medium')['#text']
            const cardImage = artist.image.find(image => image.size === 'large')['#text']
            return { ...artist, avatar: avatarImage }
        });


        this.setState({ artists });

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

    onResultClick = (artist) => {
        this.clearSearch();
        const savedArtists = this.state.savedArtists;
        savedArtists.push(artist)
        this.setState({ savedArtists: savedArtists })
        localStorage.setItem('savedArtists', JSON.stringify(savedArtists));
    }

    render() {
        const results = this.state.artists || [];
        return (
            <div className="App">
                <header className="App-header">
                    <AppBar position="static" color="primary">
                        <Toolbar className="search-bar">
                            <Typography variant="h6" color="inherit">
                                Last.fm
              </Typography>
                            <TextField
                                placeholder="Search on Last.fm"
                                className="search-input"
                                onChange={this.onTextChange}
                                value={this.state.searchTerm}
                            />
                            <Button
                                onClick={this.onSearchClick}
                                variant="contained"
                                color="secondary"
                                disabled={isEmpty(this.state.searchTerm)}
                            >
                                Search
              </Button>
                            {!isEmpty(this.state.searchTerm) && (
                                <Button
                                    onClick={this.clearSearch}
                                    variant="contained"
                                >
                                    Clear
                </Button>)
                            }
                        </Toolbar>
                    </AppBar>
                </header>

                <List className="search-results">
                    {
                        results.map((artist) => <SearchResult artist={artist} onResultClick={this.onResultClick} />
                        )
                    }
                </List>
                <div className="artist-container">
                    {
                        this.state.savedArtists.map((artist) => {
                            return (
                                <Card className="artist-card">
                                    <CardContent>
                                        {artist.name}
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
