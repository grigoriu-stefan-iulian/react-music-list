import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
import Header from '../components/Header'
import FavoriteArtists from '../components/FavoriteArtists'
import ArtistList from '../components/ArtistList'
import NotFoundPage from '../components/NotFoundPage'
import Home from '../components/Home'
import Footer from '../components/Footer'

const MusicAppRouter = () => (
    <HashRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/search" component={ArtistList} />
            <Route path="/favorites" component={FavoriteArtists} />
            <Route component={NotFoundPage} />
        </Switch>
        <Footer />
    </HashRouter>
)

export default MusicAppRouter
