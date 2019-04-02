import React from 'react'
import ArtistCard from './ArtistCard'

const FavoriteArtists = ({ savedArtists, handleRating, deleteArtist }) => {
    return (
        <div className="artist-container content-container">
            {
                savedArtists.map((artist, index) => {
                    return <ArtistCard
                        handleRating={handleRating}
                        artist={artist}
                        key={index}
                        deleteArtist={deleteArtist}
                    />
                })
            }
        </div>

    )
}

export default FavoriteArtists