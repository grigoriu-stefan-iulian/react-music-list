import React from 'react';
import { Card, CardContent } from '@material-ui/core'
import Rating from 'material-ui-rating'
import numeral from 'numeral'

const FeaturedArtistCard = ({ artist }) => {
  return (
    <Card className="artist-card">
      <div className="image-container">

        <img src={artist.cardImage || "https://via.placeholder.com/300?text=No+Artist+Image"} alt={artist.name} />
      </div>
      <CardContent>
        <h3>{artist.name}</h3>
        <p>{numeral(artist.listeners).format('0,0')} listeners.</p>
        <p>
        </p>
      </CardContent>
      <Rating
        value={5}
        max={5}
      />
    </Card>
  )
}

export default FeaturedArtistCard 