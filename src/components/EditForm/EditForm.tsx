import { FC, forwardRef, useContext } from 'react';

import { useAppDispatch } from '@/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';

import { editContactThunk } from '@/redux/contacts/operations';

import { ContactContext } from '@/components';

import { IUser } from '@/types';
import { Button, TextField } from '@mui/material';
import { InputMask, InputMaskProps } from '@react-input/mask';
import { IEdit } from './Edit.types';

export const EditForm: FC<IEdit> = ({ onClose }) => {
  const dispatch = useAppDispatch();

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

  const contact = useContext(ContactContext);

  const { register, handleSubmit } = useForm<IUser>({
    defaultValues: {
      name: contact?.name,
      number: contact?.number,
    },
  });

  const handleFormSubmit: SubmitHandler<IUser> = ({ name, number }) => {
    dispatch(
      editContactThunk({
        id: contact.id,
        body: {
          name,
          number,
        },
      })
    );
    onClose();
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col w-[300px]"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <TextField
          style={{ width: 300 }}
          className="width-500px"
          label="Name"
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          autoComplete="false"
          {...register('name')}
        />

        <TextField
          style={{ width: 300 }}
          className="width-500px"
          label="Number"
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          autoComplete="false"
          InputProps={{
            inputComponent: ForwardedInputMask,
          }}
          {...register('number')}
        ></TextField>

        <Button
          className="h-[40px] w-[300px]"
          variant="outlined"
          color="secondary"
          type="submit"
        >
          Edit
        </Button>
      </form>
    </div>
  );
};
