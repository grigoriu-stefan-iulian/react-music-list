import React from 'react'
import { AppBar, Toolbar, Typography, TextField, Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

//make class
//take methods from app.js

/*


)*/

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});
const Header = ({ onTextChange, state, onSearchClick, classes }) => (
    <header className='App-header'>
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

        </Toolbar>

    </header>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
