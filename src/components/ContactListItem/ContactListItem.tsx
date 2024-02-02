import { FC, useContext } from 'react';

import { removeContactThunk } from '@/redux/contacts/operations';
import { useModal, useAppDispatch } from '@/hooks';

import { MdDeleteForever, MdEdit } from 'react-icons/md';

import { Modal, ContactContext } from '@/components';

export const ContactListItem: FC = () => {
  const contact = useContext(ContactContext);
  const { name, number, id } = contact;

  const { isModalOpen, toggleModal } = useModal();

  const dispatch = useAppDispatch();

  const handleRemoveClick = () => {
    dispatch(removeContactThunk(id));
  };

  return (
    <li className="border border-rose-600 rounded p-3">
      <p className="font-bold text-center">{name}</p>
      <p>{number}</p>

      <div className="flex justify-between mt-2">
        <MdDeleteForever
          className="hover:cursor-pointer hover:scale-[1.2] transition-all"
          style={{ color: 'red' }}
          size={24}
          onClick={handleRemoveClick}
        />
        <MdEdit
          className="hover:cursor-pointer hover:scale-[1.2] transition-all"
          size={24}
          onClick={() => {
            toggleModal();
          }}
        />
      </div>
      {isModalOpen && <Modal onClose={toggleModal} />}
    </li>
  );
};
