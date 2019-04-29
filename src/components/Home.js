import React from 'react'
import { Link } from 'react-router-dom'
import AppIntroduction from './AppIntroduction'
import FeaturedArtists from './FeaturedArtists'

const Home = () => {
    return (
        <div className="content-container">
            <Link to="/favorites">Visit Favorites</Link>
            <AppIntroduction />
            <FeaturedArtists />
            
        </div>
    )
}

export default Home