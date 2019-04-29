import React, { useState, useEffect } from 'react'
import FeaturedArtistCard from './FeaturedArtistCard'
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
            <h2 className="introduction__header">Featured Artists</h2>
            <div className="artist-container">
            
                {featuredA.map((artist, index) => {
                    return <FeaturedArtistCard artist={artist} key={index} />
                })}
            </div>
        </div>
    )
}

export default FeaturedArtists