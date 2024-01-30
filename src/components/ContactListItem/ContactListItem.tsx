import { FC, useContext } from 'react';

import { removeContactThunk } from '@/redux/operations';

import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { Modal } from '../Modal/Modal';
import { useModal } from '@/hooks/useModal';
import { ContactContext } from '../ContactList/ContactList';
import { useAppDispatch } from '@/hooks/useAppDispatch';

export const ContactListItem: FC = () => {
  const contact = useContext(ContactContext);
  const { name, phone, id } = contact;
  const { isModalOpen, toggleModal } = useModal();
  const dispatch = useAppDispatch();

  const handleRemoveClick = () => {
    dispatch(removeContactThunk(id));
  };

  return (
    <li>
      {name} : {phone}
      <MdDeleteForever
        style={{ color: 'red' }}
        size={24}
        onClick={handleRemoveClick}
      />
      <MdEdit
        onClick={() => {
          toggleModal();
        }}
      />
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </li>
  );
};
