import React, { useContext, useState } from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core'
import Rating from 'material-ui-rating'
import numeral from 'numeral'
import MusifyContext from '../context/musify-context'
import DeleteArtistModal from './DeleteArtistModal'

const ArtistCard = ({ artist }) => {
  const { dispatch } = useContext(MusifyContext)
  const [modalIsOpen, setmodalIsOpen] = useState(false)

  const openModal = () => {
    setmodalIsOpen(true)
  }

  const closeModal = () => {
    setmodalIsOpen(false)
  }

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
          onClick={openModal} >
          Delete
        </Button>
        <DeleteArtistModal
          artist={artist}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </CardActions>
    </Card>
  )
}

export default ArtistCard 