import { Button, TextField } from '@mui/material';

import { useAppDispatch } from '@/hooks';
import { signInThunk } from '@/redux/auth/operations';

import { toast } from 'react-toastify';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { ILoginForm } from './LoginForm.types';

export const LoginForm = () => {
  const notify = () => toast('Wow so easy!');

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<ILoginForm>();
  const dispatch = useAppDispatch();
  const onFormSubmit = (data: ILoginForm) => {
    notify();
    dispatch(signInThunk(data));
    reset();
  };

  return (
    <>
      <form
        className="flex flex-col gap-[20px]"
        autoComplete="off"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h2 className=" text-3xl font-bold text-[#aa3030]">Login Form</h2>

        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' },
          }}
          render={({ field }) => (
            <TextField
              sx={{ width: 400, mb: 3 }}
              label="Email"
              variant="outlined"
              fullWidth
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          }}
          render={({ field }) => (
            <TextField
              label="Password"
              required
              variant="outlined"
              color="secondary"
              type="password"
              sx={{ mb: 3 }}
              autoComplete="false"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              {...field}
            />
          )}
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
      <small className="block mt-[10px] ">
        Need an account?
        <Link className="text-blue-900" to="/registration">
          Register here
        </Link>
      </small>
    </>
  );
};
