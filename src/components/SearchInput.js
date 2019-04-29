import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    TextField
} from '@material-ui/core'
import MusifyContext from '../context/musify-context'
import { getArtists } from '../services/api'

const isEmpty = (str) => {
    if (str === undefined) {
        return true
    }
    return str.length === 0
}

const SearchInput = () => {
    const [searchText, setSearchText] = useState('')
    const { setArtists } = useContext(MusifyContext)

    const search = async (terms) => {
        const artists = await getArtists(terms, '&method=artist.search')
        artists.length === 0 ? setArtists('No artists') : setArtists(artists)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        search(searchText)
    }
    const handleSetSearchText = (e) => setSearchText(e.target.value)

    return (
        <form onSubmit={handleSearch}
            className="form-content"
        >
            <TextField
                required
                id="standard-search"
                type="search"
                margin="normal"
                placeholder="Search..."
                onChange={handleSetSearchText}
                value={searchText}
            />
            <Button
                variant="contained"
                color="primary"
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
    )
}

export default SearchInput