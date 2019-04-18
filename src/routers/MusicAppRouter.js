import React, { useEffect, useReducer, useState } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../components/Header'
import FavoriteArtists from '../components/FavoriteArtists'
import MusifyContext from '../context/musify-context'
import MusifyReducer from '../reducers/musify-reducer'
import ArtistList from '../components/ArtistList'

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
            <BrowserRouter>
            <Header />
                <Switch>
                    <Route path="/search" component={ArtistList} />
                    <Route path="/favorites" component={FavoriteArtists} />

                </Switch>
            </BrowserRouter>
        </MusifyContext.Provider>

    );
};

export default MusicAppRouter;




// const MusifyApp = () => {


//     return (
//         <Header />
//         <ArtistList />
//         <FavoriteArtists />
//     )
// }