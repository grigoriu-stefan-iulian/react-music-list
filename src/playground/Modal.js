import React, { useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
       
        transform: 'translate(-50%, -50%)'
    }
};

const MyModal = () => {

    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const openModal = () => {
        setmodalIsOpen(true);
    }

    const closeModal = () => {
        setmodalIsOpen(false);
    }
    return (

        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    )
}

export default MyModal;