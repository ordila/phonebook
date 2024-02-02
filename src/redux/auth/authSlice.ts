import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  logOutThunk,
  reloadThunk,
  signInThunk,
  signUpThunk,
} from './operations';
import { IGeneralState } from '../store.types';

const initialState: IGeneralState['user'] = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: false,
};

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
  extraReducers: buider => {
    buider
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.isLoggedIn = true;
      })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.isLoggedIn = true;
      })
      .addCase(reloadThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(reloadThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(reloadThunk.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addMatcher(isAnyOf(signInThunk.pending, signUpThunk.pending), state => {
        state.error = false;
      })
      .addMatcher(
        isAnyOf(signInThunk.rejected, signUpThunk.rejected),
        state => {
          state.error = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
