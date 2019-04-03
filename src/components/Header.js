import React, { useState, useContext } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    TextField
} from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { getArtists } from '../services/api'
import MusifyContext from '../context/musify-context';

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
})

const isEmpty = (str) => str.length === 0

const Header = () => {
    const [searchText, setSearchText] = useState('')
    const { setArtists } = useContext(MusifyContext)

    const search = async (terms) => {
        const artists = await getArtists(terms)
        artists.length === 0 ? setArtists('No artists') : setArtists(artists)
    }

    return (
        <div className="container">
            <header className="header app-header">
                <AppBar
                    position="static"
                    color="primary">
                    <Toolbar className="search-bar content-container">
                        <Typography variant="h6" color="inherit">
                            Musify
                    </Typography>
                        <div className="search-container">
                            <TextField
                                placeholder="Search..."
                                className="search-input"
                                onChange={(e) => setSearchText(e.target.value)}
                                value={searchText}
                                onKeyPress={(e) => e.key === 'Enter' && searchText
                                    ? search(searchText)
                                    : ''}
                            />
                            {!isEmpty(searchText) && (
                                <ClearIcon
                                    className="button--clear"
                                    onClick={() => setSearchText('')}
                                />
                            )}
                        </div>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => search(searchText)}
                            disabled={isEmpty(searchText)}
                        >
                            Search
                        </Button>
                    </Toolbar>
                </AppBar>
            </header>
        </div>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
