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
  const alreadyExists = savedArtists.find(item => item.name === artist.name)

  const dispatchFavorite = (artist) => {
    if (!alreadyExists) {
      dispatch({ type: "ADD_ARTIST", savedArtist: { ...artist, rating: null } })
    } else {
      dispatch({ type: "DELETE_ARTIST", artist })
    }
  }
  const handleFavorite = () => dispatchFavorite(artist)

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
      id="button"
        variant="outlined"
        color="secondary"
        size="small"
        className="add-button"
        onClick={handleFavorite}
      >
        {!!alreadyExists ? 'Remove from Favorites' : 'Add to Favorites'}
      </Button>
    </ListItem>
  )
}

export default SearchResult