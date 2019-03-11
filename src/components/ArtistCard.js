import React from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core'
import Rating from 'material-ui-rating'

// class ArtistCard extends React.Component {
//   super()
// }

// No duplicates allowed
// Rating
// Format listeners number

export const ArtistCard = (props) => {
  const { artist, deleteArtist, handleRating } = props;
  console.log(artist.cardImage)
  return (
    <Card className="artist-card">
      <div className="image-container">
        <img src={artist.cardImage} alt={artist.name} />
      </div>
      <CardContent>
        <h3>{artist.name}</h3>
        <p>{artist.listeners} listeners.</p>
        <p>
        </p>
      </CardContent>
      <Rating
        value={5}
        max={5}
        onChange={() => handleRating()}
      />
      <CardActions>
        <Button size="small" color="primary">
          Share
      </Button>
        <Button size="small" color="secondary" onClick={() => deleteArtist(artist)}>
          Delete
      </Button>
      </CardActions>
    </Card>
  )
}