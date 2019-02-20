import React from 'react'
import { AppBar, Toolbar, Typography, TextField, Button } from '@material-ui/core'
//make class
//take methods from app.js
export default () => (
    <header className='App-header'>
                    <AppBar position="static" color="primary" />
                    <Toolbar>
                        <Typography variant="h6" color="inherit" />
                        <TextField
                            placeholder="Search on Spotify"
                            onChange={this.onTextChange}
                            value={this.state.searchText}
                        />
                        <Button
                            onClick={this.onSearchClick}
                            disabled={this.state.searchText.length > 0}

                        >
                            Search
                        </Button>


                    </Toolbar>

                </header>
)