import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { List } from '@material-ui/core'
import SearchResult from './SearchResult'
import MusifyContext from '../context/musify-context'

const ArtistList = () => {
    const { artists } = useContext(MusifyContext)
    return (
        <div className="content-container">
       
            <List className="search-results">
                {artists === 'No artists' ?
                    <h5>No artists found. Try another search.</h5>
                    :
                    artists.map((artist, index) => {
                        return <SearchResult
                            key={index}
                            artist={artist}
                        />
                    })
                }
            </List>
            <Link
                className="button"
                to="/favorites"
            >
                Manage Your Favorites
            </Link>
        </div>
    )
}

export default ArtistList