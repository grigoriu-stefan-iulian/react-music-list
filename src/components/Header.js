import React from 'react'
import { AppBar, 
    Toolbar, 
    Typography, 
    TextField, 
    Button, 
    List,
    ListItem, 
    ListItemAvatar, 
    ListItemText, 
    Avatar } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

//make class
//take methods from app.js
//afisare eroare - homework

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

const Header = ({ onTextChange, state, onSearchClick, classes }) => (
    <div className="container">
        <header className='header'>
            <AppBar position="static" color="inherit" />
            <Toolbar>
                <Typography variant="h6" color="inherit" />
                <TextField
                    placeholder="Search on Spotify"
                    onChange={onTextChange}
                    value={state.searchText}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={onSearchClick}
                    disabled={state.searchText.length === 0}
                >       Search
            </Button>
                {this.state.searchText.length && (
                    <Button
                        onClick={() => this.setState({ searchText: '' })}
                        variant="contained"
                    >
                        Clear
                </Button>
                )}

            </Toolbar>

        </header>
        <List className="search__results">
            {this.state.artists.map((artist, i) => {
                return (<ListItem
                    button
                    key={i}
                >
                    <ListItemText primary={artist.name} />
                     Views: {artist.listeners} 
                </ListItem>)


            })}
        </List>
    </div>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
