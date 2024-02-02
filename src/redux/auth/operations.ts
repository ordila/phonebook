import { instance, setJWTtoRequests } from '@/helpers/api/instance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGeneralState } from '../store.types';

export const signInThunk = createAsyncThunk(
  'auth/signIn',
  async (body: any, thunkAPI) => {
    try {
      const { data } = await instance.post(`users/login`, body);
      setJWTtoRequests(data.token);

      return data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (body: any, thunkAPI) => {
    try {
      const { data } = await instance.post(`users/signup`, body);
      setJWTtoRequests(data.token);

      return data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);

export const reloadThunk = createAsyncThunk(
  'auth/reload',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as IGeneralState;
      const { token } = state.user;
      if (!token) {
        return thunkAPI.rejectWithValue('There is no token');
      }
      setJWTtoRequests(token);
      const { data } = await instance.get('users/current');
      console.log('data', data);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error during reloadThunk:', err.message); // Log the error message
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.post('users/logout');
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);
