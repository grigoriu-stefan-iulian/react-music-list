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

Modal.setAppElement('#root')

const DeleteArtistModal = () => {
    const { artist, closeModal, deleteModal, setDeleteModal } = useContext(ModalContext)
    const { dispatch } = useContext(MusifyContext)

    return (
        <Modal
            isOpen={deleteModal}
            onRequestClose={() => closeModal(setDeleteModal)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2>Delete {artist.name} from favorites?</h2>
            <h4>The data will be lost.</h4>
            <button onClick={() => {
                dispatch({ type: "DELETE_ARTIST", artist })
                closeModal(setDeleteModal)
            }}
            >
                Yes
            </button>
            <button onClick={() => closeModal(setDeleteModal)}>No</button>
        </Modal>
    )
}

export default DeleteArtistModal