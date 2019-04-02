import React, { useEffect, useReducer, useState } from 'react'
import FavoriteArtists from './FavoriteArtists'
import MusifyContext from '../context/musify-context'
import MusifyReducer from '../reducers/musify-reducer'
import ArtistList from './ArtistList'
import Header from './Header'

const MusifyApp = () => {
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
      <Header />
      <ArtistList />
      <FavoriteArtists />
    </MusifyContext.Provider>
  )
}

export default MusifyApp
