import React, { useState, useEffect } from 'react'
import ArtistCard from './ArtistCard'
import { getFeaturedArtists } from '../services/api'

const FeaturedArtists = () => {
    const [featuredA, setFeaturedA] = useState([])
    const handleFeaturedArtists = async () => {
        const featuredArtists = await getFeaturedArtists()
        setFeaturedA(featuredArtists)
    }
    useEffect(() => {
        handleFeaturedArtists()
    }, [])
    return (
        <div>
            <h2>Featured Artists</h2>
            <div className="artist-container">

                {featuredA.map((artist, index) => {
                    return <ArtistCard artist={artist} key={index} />
                })}
            </div>
        </div>
    )
}

export default FeaturedArtists