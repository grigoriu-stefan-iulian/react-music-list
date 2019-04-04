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
    const { closeModal, shareModal, setShareModal } = useContext(ModalContext)
    return (
        <Modal
            isOpen={shareModal}
            onRequestClose={() => closeModal(setShareModal)}
            style={customStyles}
            contentLabel="Example Modal"
        >
        <ShareButtons />
           
            <button onClick={() => {
                closeModal(setShareModal)
            }
            }
            >Close</button>

        </Modal>
    );
};

export default ShareModal;