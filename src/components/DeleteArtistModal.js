import React, { useContext } from 'react'
import Modal from 'react-modal'
import MusifyContext from '../context/musify-context'
import ModalContext from '../context/modal-context'

if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root')
}

const DeleteArtistModal = () => {
    const { artist, handleCloseDeleteModal, deleteModal } = useContext(ModalContext)
    const { dispatch } = useContext(MusifyContext)
    const handleDeleteArtist = () => {
        dispatch({ type: "DELETE_ARTIST", artist })
        handleCloseDeleteModal()
    }
    return (
        <Modal
            className="modal"
            isOpen={deleteModal}
            onRequestClose={handleCloseDeleteModal}
            contentLabel="Example Modal"
        >
            <h2 className="modal__title">Delete {artist.name} from favorites?</h2>
            <h4>The data will be lost.</h4>
            <button
                className="button option-one"
                onClick={handleDeleteArtist}
            >
                Yes
            </button>
            <button
                className="button button--secondary"
                onClick={handleCloseDeleteModal}
            >
                No
            </button>
        </Modal>
    )
}

export default DeleteArtistModal