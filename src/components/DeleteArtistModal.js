import React, { useContext } from 'react'
import Modal from 'react-modal'
import MusifyContext from '../context/musify-context'
import ModalContext from '../context/modal-context';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)'
    }
}

if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
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
            isOpen={deleteModal}
            onRequestClose={handleCloseDeleteModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2>Delete {artist.name} from favorites?</h2>
            <h4>The data will be lost.</h4>
            <button onClick={handleDeleteArtist}
            >
                Yes
            </button>
            <button onClick={handleCloseDeleteModal}>No</button>
        </Modal>
    )
}

export default DeleteArtistModal