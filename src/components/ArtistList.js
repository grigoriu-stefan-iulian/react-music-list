import React, { useContext } from 'react'
import { List } from '@material-ui/core'
import SearchResult from './SearchResult'
import MusifyContext from '../context/musify-context';

const ArtistList = () => {
    const { artists } = useContext(MusifyContext)
    const results = artists || []

    return (
        <div className="content-container">
            <List className="search-results">
                {
                    results.map((artist, index) => {
                        return <SearchResult
                            key={index}
                            artist={artist}
                        />
                    })
                }
            </List>
        </div>

    )
}

export default ArtistList