import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    TextField
} from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
//import PropTypes from 'prop-types'
//import { withStyles } from '@material-ui/core/styles'
import { getArtists } from '../services/api'
import MusifyContext from '../context/musify-context'
/*
const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
})
*/
const isEmpty = (str) => {
    if (str === undefined) {
        return true
    }
    return str.length === 0
}

const Header = () => {
    const [searchText, setSearchText] = useState('')
    const { setArtists } = useContext(MusifyContext)

    const search = async (terms) => {
        const artists = await getArtists(terms)
        artists.length === 0 ? setArtists('No artists') : setArtists(artists)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        search(searchText)
    }
    const handleSetSearchText = (e) => setSearchText(e.target.value)
    const handleClearSearchText = () => setSearchText('')

    return (
        <AppBar
            position="static"
            color="primary">
            
            <div className="content-container">
                <Toolbar className="header__content">
                    <Typography variant="h6" color="inherit">
                        <Link className="header__logo" to="/" >
                            <h1>Musify</h1>
                        </Link>
                    </Typography>
                    <form onSubmit={handleSearch} >
                        <div className="search-container">
                            <TextField
                                required
                                placeholder="Search..."
                                className="search-input"
                                onChange={handleSetSearchText}
                                value={searchText}
                            />
                            {!isEmpty(searchText) && (
                                <ClearIcon
                                    className="button--clear"
                                    onClick={handleClearSearchText}
                                />
                            )}
                        </div>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleSearch}
                            disabled={isEmpty(searchText)}
                        >
                            <Link
                                className="search-link"
                                to="/search">
                                Search
                            </Link>
                        </Button>
                    </form>
                    <Link className="header__favorites" to="/favorites/">Favorites</Link>
                </Toolbar>
            </div>
        </AppBar>
    )
}
/*
Header.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
*/
export default Header
