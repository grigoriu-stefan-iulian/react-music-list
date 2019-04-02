import React, { useState, useEffect } from 'react'
import { getArtists } from '../services/api'
import Header from './Header'
import ArtistList from './ArtistList'
import FavoriteArtists from './FavoriteArtists'

const MusifyApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [savedArtists, setSavedArtists] = useState([]);
  const [artists, setArtists] = useState([]);

  const onTextChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
  }

  const search = async (terms) => {
    const artists = await getArtists(terms)
    setArtists(artists)
    console.log(artists)
  }

  const onSearchClick = () => {
    search(searchTerm)
  }

  const clearSearch = () => {
    setSearchTerm('')
    setArtists([])
  }

  const updateArtists = (newArtists) => {
    setSavedArtists(newArtists)
    localStorage.setItem('savedArtists', JSON.stringify(newArtists))
  }

  const deleteArtist = (artist) => {
    const result = savedArtists.filter(item => item.name !== artist.name)
    updateArtists(result)
  }

  const onResultClick = (artist) => {
    clearSearch()
    const alreadyExists = savedArtists.find(item => item.name === artist.name)
    if (!alreadyExists) {
      updateArtists([...savedArtists, {...artist, rating: null}])

    } else {
      console.log('artist already saved')
    }
  }

  const handleRating = (rating, artist) => {
    artist.rating = rating
    updateArtists(savedArtists)
  }

  useEffect(() => {
    console.log('triggered useEffect')
    const existing = localStorage.getItem('savedArtists')
    if (existing) {
      setSavedArtists(JSON.parse(existing))
    }
  }, [])
  return (
    <div className="App">
      <Header
        onTextChange={onTextChange}
        searchTerm={searchTerm}
        onSearchClick={onSearchClick}
        clearSearch={clearSearch}
      />
      <ArtistList
        artists={artists}
        onResultClick={onResultClick}
      />
      <FavoriteArtists
        handleRating={handleRating}
        deleteArtist={deleteArtist}
        savedArtists={savedArtists}
      />
    </div>
  )
}

export default MusifyApp
