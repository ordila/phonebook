import { useAppDispatch } from '@/hooks/useAppDispatch';
import { signUpThunk } from '@/redux/auth/operations';

import { Button, TextField } from '@mui/material';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from './RegisterForm.types';

import { Link } from 'react-router-dom';

export const RegisterForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<Form>();

  const dispatch = useAppDispatch();

  const onFormSubmit = (data: Form) => {
    dispatch(signUpThunk(data));

    reset();
  };
  return (
    <>
      <form
        className="flex flex-col gap-[20px]"
        autoComplete="off"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h2>Registration Form</h2>
        <TextField
          style={{ width: 400 }}
          label="Your name"
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          autoComplete="false"
          {...register('name')}
        />

        <TextField
          label="Email"
          required
          variant="outlined"
          color="secondary"
          type="email"
          autoComplete="false"
          sx={{ mb: 3 }}
          {...register('email')}
        />
        <TextField
          label="Password"
          required
          variant="outlined"
          color="secondary"
          type="password"
          autoComplete="false"
          sx={{ mb: 3 }}
          {...register('password')}
        />

        <Button
          className="h-[50px]"
          variant="outlined"
          color="secondary"
          type="submit"
        >
          Login
        </Button>
      </form>
      <small>
        Have an account?{' '}
        <Link className="text-blue-900" to="/login">
          Login here
        </Link>
      </small>
    </>
  );
};
