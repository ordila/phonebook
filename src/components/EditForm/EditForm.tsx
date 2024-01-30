import { FC, useContext } from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { SubmitHandler, useForm } from 'react-hook-form';

import { editContactThunk } from '@/redux/operations';

import { ContactContext } from '../ContactList/ContactList';

import { EditFormProps } from './EditForm.types';
import { Inputs } from '../ContactForm/ContactForm.types';

const EditForm: FC<EditFormProps> = ({ closeModal }) => {
  const dispatch = useAppDispatch();

  const contact = useContext(ContactContext);

  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      name: contact?.name,
      phone: contact?.phone,
    },
  });

  const handleFormSubmit: SubmitHandler<Inputs> = ({ name, phone }) => {
    dispatch(
      editContactThunk({
        id: contact.id,
        body: {
          ...contact,
          name,
          phone,
        },
      })
    );
    closeModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="text" {...register('name')} />
        <input type="text" {...register('phone')} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditForm;
