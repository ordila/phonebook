import { FC } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';

import { getContacts } from '@/redux/selectors';
import { addContactThunk } from '@/redux/operations';
import { nanoid } from '@reduxjs/toolkit';

import { Inputs } from './ContactForm.types';

export const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const contacts = useAppSelector(getContacts);

  const dispatch = useAppDispatch();

  const handleFormSubmit: SubmitHandler<Inputs> = ({ name, phone }) => {
    if (!name || !phone) {
      alert('Заповніть усі поля');
      return;
    }

    if (
      !!contacts.find(
        contact => contact.name.toUpperCase() === name.toUpperCase()
      )
    ) {
      alert('Contact is already exist');
      return;
    }

    dispatch(
      addContactThunk({
        name,
        phone,
        createdAt: String(new Date().toISOString()),
        id: nanoid(),
      })
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        type="text"
        {...register('name', { required: 'Name is required!', maxLength: 20 })}
      />
      {errors.name?.type === 'required' && (
        <p role="alert">{errors.name.message}</p>
      )}
      <input
        type="tel"
        {...register('phone', {
          required: 'Phone number is required!',
          pattern: /^[0-9]*$/,
        })}
      />
      {errors.phone?.type === 'required' && (
        <p role="alert">{errors.phone.message}</p>
      )}
      {errors.phone?.type === 'pattern' && <p role="alert">Only numbers!</p>}
      <button type="submit">Add contact</button>
    </form>
  );
};
