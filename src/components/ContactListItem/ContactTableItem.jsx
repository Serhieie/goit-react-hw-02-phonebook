import React, { useState, useRef } from 'react';
import {
  TableRow,
  Button,
  TableCell,
  ModalButton,
  ModalBtnContainer,
  ModalButtonDelete,
  H2,
} from './ContactTableItem.styled';
import normalizePhoneNumber from '../../helpers/numberNormalize';
import { AiOutlineUserDelete } from 'react-icons/ai';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ContactTableItem({ contact, index, onDeleteContact }) {
  const windowWidth = window.innerWidth;
  const [modalIsOpen, setIsOpen] = useState(false);
  const subtitle = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    onDeleteContact(contact.id);
    closeModal();
  };

  return (
    <TableRow>
      <TableCell width="5%">{index + 1}</TableCell>
      <TableCell width="38%">{contact.name}</TableCell>
      <TableCell width="42%">{normalizePhoneNumber(contact.number)}</TableCell>
      <TableCell width="15%">
        <Button id="delete-btn" onClick={openModal}>
          {windowWidth < 768 ? (
            <AiOutlineUserDelete style={{ marginRight: '4px' }} />
          ) : (
            'Delete'
          )}
        </Button>
        <Modal
          style={{
            overlay: {
              position: 'fixed',
              zIndex: 999,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(250, 250, 210, 0.5)',
            },
            content: {
              position: 'absolute',
              top: '40%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid #ccc',
              background: 'rgb(245, 187, 86)',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: windowWidth > 768 ? '60px 40px' : '20px 10px',
            },
          }}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Delete Confirmation"
        >
          <H2 ref={subtitle}>Delete contact {contact.name}?</H2>
          <ModalBtnContainer>
            <ModalButtonDelete onClick={handleDelete}>Delete</ModalButtonDelete>
            <ModalButton onClick={closeModal}>Cancel</ModalButton>
          </ModalBtnContainer>
        </Modal>
      </TableCell>
    </TableRow>
  );
}
