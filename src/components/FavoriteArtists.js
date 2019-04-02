import React, { useContext } from 'react'
import ArtistCard from './ArtistCard'
import MusifyContext from '../context/musify-context';

const FavoriteArtists = () => {
    const { savedArtists } = useContext(MusifyContext)
    return (
        <div className="artist-container content-container">
            {
                savedArtists.map((artist, index) => {
                    return <ArtistCard
                        artist={artist}
                        key={index}
                    />
                })
            }
        </div>
    )
}

export default FavoriteArtists