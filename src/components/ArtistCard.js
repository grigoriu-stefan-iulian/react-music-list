import React, { useContext, useState } from 'react'
import { Card, CardContent, CardActions, Button } from '@material-ui/core'
import Rating from 'material-ui-rating'
import numeral from 'numeral'
import MusifyContext from '../context/musify-context'
import ModalContext from '../context/modal-context'
import DeleteArtistModal from './DeleteArtistModal'
import ShareModal from './ShareModal'

const ArtistCard = ({ artist }) => {
  const { dispatch } = useContext(MusifyContext)
  const [deleteModal, setDeleteModal] = useState(false)
  const [shareModal, setShareModal] = useState(false)

  const openModal = (setModal) => setModal(true)
  const closeModal = (setModal) => setModal(false)

  const handleOpenShareModal = () => openModal(setShareModal)
  const handleCloseShareModal = () => closeModal(setShareModal)
  
  const handleOpenDeleteModal = () => openModal(setDeleteModal)
  const handleCloseDeleteModal = () => closeModal(setDeleteModal)

  const handleRating = (rating, artist) => {
    if (rating === artist.rating) {
      return dispatch({ type: "EDIT_ARTIST", artist, updates: { rating: 0 } })
    }
    return dispatch({ type: "EDIT_ARTIST", artist, updates: { rating } })
  }
  const setRating = (e) => handleRating(e, artist)

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
        value={artist.rating}
        max={5}
        onChange={setRating}
      />
      <CardActions>
        <Button
          id="button"
          size="small"
          color="primary"
          onClick={handleOpenShareModal}
        >
          Share
        </Button>
        <Button
          id="button--secondary"
          size="small"
          color="secondary"
          onClick={handleOpenDeleteModal}
        >
          Delete
        </Button>
        <ModalContext.Provider
          value={{ artist, shareModal, deleteModal, handleCloseShareModal, handleCloseDeleteModal }}>
          <DeleteArtistModal />
          <ShareModal />
        </ModalContext.Provider>
      </CardActions>
    </Card>
  )
}

export default ArtistCard 