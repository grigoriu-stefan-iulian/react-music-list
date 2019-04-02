import React, { useContext } from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core'
import Rating from 'material-ui-rating'
import numeral from 'numeral'
import MusifyContext from '../context/musify-context'

const ArtistCard = ({ artist }) => {
  const { dispatch } = useContext(MusifyContext)

  const handleRating = (rating, artist) => {
    dispatch({ type: 'EDIT_ARTIST', artist, updates: { rating } })
  }

  return (
    <Card className="artist-card">
      <div className="image-container">
        <img src={artist.cardImage} alt={artist.name} />
      </div>
      <CardContent>
        <h3>{artist.name}</h3>
        <p>{numeral(artist.listeners).format('0,0')} listeners.</p>
        <p>
        </p>
      </CardContent>
      <Rating
        value={artist.rating}
        max={5}
        onChange={(e) => handleRating(e, artist)}
      />
      <CardActions>
        <Button size="small" color="primary">
          Share
 </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => dispatch({ type: "DELETE_ARTIST", artist })} >
          Delete
 </Button>
      </CardActions>
    </Card>
  )
}

export default ArtistCard 