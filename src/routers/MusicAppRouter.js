import React, { useEffect, useReducer, useState } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
//import createHistory from 'history/createBrowserHistory'
import Header from '../components/Header'
import FavoriteArtists from '../components/FavoriteArtists'
import MusifyContext from '../context/musify-context'
import MusifyReducer from '../reducers/musify-reducer'
import ArtistList from '../components/ArtistList'
import NotFoundPage from '../components/NotFoundPage'
import Home from '../components/Home'
import Footer from '../components/Footer'

//const history = require("history").createBrowserHistory()

const MusicAppRouter = () => {
    const [savedArtists, dispatch] = useReducer(MusifyReducer, [])
    const [artists, setArtists] = useState([])

    useEffect(() => {
        const existing = localStorage.getItem('savedArtists')
        if (existing) {
            dispatch({ type: "POPULATE_LIST", artists: JSON.parse(localStorage.getItem('savedArtists')) })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('savedArtists', JSON.stringify(savedArtists))
    }, [savedArtists])

    return (
        <MusifyContext.Provider value={{ savedArtists, dispatch, artists, setArtists }}>
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
        </MusifyContext.Provider>
    )
}

export default MusicAppRouter
