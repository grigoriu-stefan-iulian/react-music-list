import React, { useContext } from 'react'
import Modal from 'react-modal'
import ShareButtons from './ShareButtons'
import ModalContext from '../context/modal-context'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',

        transform: 'translate(-50%, -50%)'
    }
}

// workaround for test cases
if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
}

const ShareModal = () => {
    const { shareModal, handleCloseShareModal } = useContext(ModalContext)
    return (
        <Modal
            className="modal"
            isOpen={shareModal}
            onRequestClose={handleCloseShareModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h3 className="modal__title">Select Share Option</h3>
            <ShareButtons />
            <button 
            className="button button--secondary"
            onClick={handleCloseShareModal}
            >
                Close
            </button>
        </Modal>
    );
};

export default ShareModal;