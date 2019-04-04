import React, { useContext, useState } from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core'
import Rating from 'material-ui-rating'
import numeral from 'numeral'
import MusifyContext from '../context/musify-context'
import ModalContext from '../context/modal-context'
import DeleteArtistModal from './DeleteArtistModal'
import ShareModal from './ShareModal';

const ArtistCard = ({ artist }) => {
  const { dispatch } = useContext(MusifyContext)
  const [deleteModal, setDeleteModal] = useState(false)
  const [shareModal, setShareModal] = useState(false)

  const openModal = (setModal) => {
    setModal(true)
  }

  const closeModal = (setModal) => {
    setModal(false)
  }

  const handleRating = (rating, artist) => {
    if (rating === artist.rating) {
      return dispatch({ type: "EDIT_ARTIST", artist, updates: { rating: 0 } })
    }
    return dispatch({ type: "EDIT_ARTIST", artist, updates: { rating } })
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
        <Button
          size="small"
          color="primary"
          onClick={() => openModal(setShareModal)}
        >
          Share
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => openModal(setDeleteModal)}
        >
          Delete
        </Button>
        <ModalContext.Provider
          value={{ artist, deleteModal, closeModal, setDeleteModal, shareModal, setShareModal }}>
          <DeleteArtistModal />
          <ShareModal />
        </ModalContext.Provider>
      </CardActions>
    </Card>
  )
}

export default ArtistCard 