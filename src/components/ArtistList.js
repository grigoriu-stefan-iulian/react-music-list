import React from 'react'
import { List } from '@material-ui/core'
import SearchResult from './SearchResult'

const ArtistList = ({ artists, onResultClick }) => {
    const results = artists || []
    return (
        <div className="content-container">
            <List className="search-results">
                {
                    results.map((artist, index) => {
                        return <SearchResult
                            key={index}
                            artist={artist}
                            onResultClick={onResultClick}
                        />
                    })
                }
            </List>
        </div>

    )
}

export default ArtistList