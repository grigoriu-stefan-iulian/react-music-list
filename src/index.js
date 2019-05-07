import React, { useEffect, useReducer, useState } from 'react'
import ReactDOM from 'react-dom'
import MusicAppRouter from './routers/MusicAppRouter'
import MusifyContext from './context/musify-context'
import MusifyReducer from './reducers/musify-reducer'
import './styles/styles.scss'
//import { firebase } from './firebase/firebase'
//import FirebaseRef from './playground/FirebaseRef'

const App = () => {
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
            <MusicAppRouter />
        </MusifyContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
