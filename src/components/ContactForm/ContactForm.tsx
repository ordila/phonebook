import { FC, forwardRef } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { getContacts } from '@/redux/contacts/selectors';
import { addContactThunk } from '@/redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';

import { IUser } from '@/types';

import { Button, TextField } from '@mui/material';
import { InputMask, InputMaskProps } from '@react-input/mask';

export const ContactForm: FC = () => {
  const ForwardedInputMask = forwardRef<HTMLInputElement, InputMaskProps>(
    (props, forwardedRef) => {
      return (
        <InputMask
          ref={forwardedRef}
          mask="+380 (__) ___ __ __"
          replacement="_"
          {...props}
        />
      );
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>();

  const contacts = useAppSelector(getContacts);

  const dispatch = useAppDispatch();

  const handleFormSubmit: SubmitHandler<IUser> = ({ name, number }) => {
    if (!name || !number) {
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
        number,
        createdAt: String(new Date().toISOString()),
        id: nanoid(),
      })
    );
    reset();
  };

  return (
    <div className="max-w-[400px] mx-auto">
      <form className="flex flex-col" onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          sx={{ width: '400px', mb: 3 }}
          label="Name"
          required
          variant="outlined"
          color="secondary"
          type="text"
          autoComplete="false"
          {...register('name', {
            required: 'Name is required!',
            maxLength: 20,
          })}
        />

        <TextField
          sx={{ width: '400px', mb: 3 }}
          label="Phone number"
          required
          variant="outlined"
          color="secondary"
          type="text"
          autoComplete="false"
          InputProps={{
            inputComponent: ForwardedInputMask,
          }}
          {...register('number', {})}
        ></TextField>

        <Button
          className="h-[50px] w-full"
          variant="outlined"
          color="secondary"
          type="submit"
        >
          Add contact
        </Button>
      </form>
    </div>
  );
};
