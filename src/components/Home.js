import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>This is Home Page</h2>
            <Link to="/favorites">Visit Favorites</Link>
        </div>
    )
}

export default Home