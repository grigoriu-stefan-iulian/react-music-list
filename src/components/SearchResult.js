import React, { useContext } from 'react';
import {
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from '@material-ui/core';
import MusifyContext from '../context/musify-context';

const SearchResult = ({ artist }) => {
  const { savedArtists, dispatch } = useContext(MusifyContext)

  const onResultClick = (artist) => {
    const alreadyExists = savedArtists.find(item => item.name === artist.name)
    if (!alreadyExists) {
      dispatch({ type: "ADD_ARTIST", savedArtist: { ...artist, rating: null } })
    } else {
      console.log('artist already saved')
    }
  }

  return (
    <ListItem
      button
      key={artist.name}
      className="result"
    >
      <ListItemAvatar>
        <Avatar src={artist.avatar} alt={artist.name} />
      </ListItemAvatar>
      <ListItemText primary={artist.name} />
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        className="add-button"
        onClick={onResultClick}
      >
        Add to favorites
      </Button>
    </ListItem>
  )
}

export default SearchResult