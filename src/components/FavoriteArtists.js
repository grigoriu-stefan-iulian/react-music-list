import React, { useContext } from 'react'
import ArtistCard from './ArtistCard'
import MusifyContext from '../context/musify-context';

const FavoriteArtists = () => {
    const { savedArtists } = useContext(MusifyContext)
    return (
        <div className="content-container">
            <h2>You have
            {
                    savedArtists.length === 0 ? "no" : savedArtists.length}
                favorite
                {
                    savedArtists.length > 1 || savedArtists.length === 0
                        ?
                        "artists"
                        :
                        "artist"}</h2>
            <div className="artist-container">
                {
                    savedArtists.map((artist, index) => {
                        return <ArtistCard
                            artist={artist}
                            key={index}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default FavoriteArtists