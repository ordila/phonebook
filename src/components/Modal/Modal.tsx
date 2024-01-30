import { FC } from 'react';

import { IoClose } from 'react-icons/io5';
import EditForm from '../EditForm/EditForm';

interface ModalProps {
  toggleModal: () => void;
}
//styles for Modal will be in the next HW.

export const Modal: FC<ModalProps> = ({ toggleModal }) => {
  return (
    <div>
      <IoClose onClick={toggleModal} />
      <EditForm closeModal={toggleModal} />
    </div>
  );
};
