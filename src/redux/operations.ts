import { ContactSingle } from '@/components/ContactForm/ContactForm.types';
import { instance } from '@/helpers/api/instance';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContactsThunk = createAsyncThunk(
  'getAllContacts',
  async (_, ThunkApi) => {
    try {
      const { data } = await instance.get<ContactSingle[]>('contacts');

      return data;
    } catch (err) {
      if (err instanceof Error) return ThunkApi.rejectWithValue(err.message);
    }
  }
);

export const removeContactThunk = createAsyncThunk(
  'removeContact',
  async (id: string, ThunkApi) => {
    try {
      const { data } = await instance.delete(`contacts/${id}`);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return ThunkApi.rejectWithValue(err.message);
      }
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'editContact',
  async ({ id, body }: { id: string; body: any }, ThunkApi) => {
    try {
      const { data } = await instance.put(`contacts/${id}`, body);

      return data;
    } catch (err) {
      if (err instanceof Error) {
        return ThunkApi.rejectWithValue(err.message);
      }
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (contact: ContactSingle, ThunkApi) => {
    try {
      const { data } = await instance.post<ContactSingle>('contacts', contact);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return ThunkApi.rejectWithValue(err.message);
      }
    }
  }
);
