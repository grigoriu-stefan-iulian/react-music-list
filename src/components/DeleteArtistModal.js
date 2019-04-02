import React, { useContext } from 'react'
import Modal from 'react-modal'
import MusifyContext from '../context/musify-context';

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

const DeleteArtistModal = ({ artist, closeModal, modalIsOpen }) => {
    const { dispatch } = useContext(MusifyContext)

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2>Delete {artist.name} from favorites?</h2>
            <h4>The data will be lost.</h4>
            <button onClick={() => {
                dispatch({ type: "DELETE_ARTIST", artist })
                closeModal()
            }
            }
            >Yes</button>
            <button onClick={closeModal}>No</button>
        </Modal>
    )
}

export default DeleteArtistModal