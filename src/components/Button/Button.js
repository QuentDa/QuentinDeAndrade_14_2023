import React from 'react';
import { useModal } from '@eiken/modal-react';

export default function Button({ButtonText, children}) {
    const { show, openModal, closeModal, Modal } = useModal();

    return (
        <div className="button">
            <button onClick={openModal}>{ButtonText}</button>
            <Modal show={show} onClose={closeModal} title="Employee Created">
                {children}
            </Modal>
        </div>
    );
}