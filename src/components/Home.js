import React from 'react'
import { Link } from 'react-router-dom'
import AppIntroduction from './AppIntroduction'
import FeaturedArtists from './FeaturedArtists'

const Home = () => {
    return (
        <div className="content-container">
            <AppIntroduction />
            <FeaturedArtists />

            <Link
                className="button"
                to="/favorites"
            >
                Manage Your Favorites
            </Link>
        </div>
    )
}

export default Home