import React, { useState, useRef } from 'react';
import {
  TableRow,
  TableCell,
  Button,
  ModalBtnContainer,
  H2,
} from './ContactTableItem.styled';
import normalizePhoneNumber from '../../helpers/numberNormalize';
import { AiOutlineUserDelete } from 'react-icons/ai';
import Modal from 'react-modal';
import { settings } from 'constants/deleteModalSettings';

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
          style={settings}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Delete Confirmation"
        >
          <H2 ref={subtitle}>Delete contact {contact.name}?</H2>
          <ModalBtnContainer>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={closeModal}>Cancel</button>
          </ModalBtnContainer>
        </Modal>
      </TableCell>
    </TableRow>
  );
}
