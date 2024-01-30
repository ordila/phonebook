import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  editContactThunk,
  getContactsThunk,
  removeContactThunk,
} from './operations';
import { ContactSingle } from '@/components/ContactForm/ContactForm.types';

const initialState = {
  contacts: {
    items: [] as ContactSingle[],
    isLoading: false,
    error: '',
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.contacts.items = state.contacts.items.concat(payload);
        }
      })
      .addCase(removeContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(el => {
          return el.id !== payload.id;
        });
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        if (payload) state.contacts.items.push(payload);
      })
      .addCase(editContactThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.contacts.items = state.contacts.items.map(el => {
            if (el.id === payload.id) {
              return payload;
            }
            return el;
          });
        }
      })
      .addMatcher(
        isAnyOf(getContactsThunk.pending, removeContactThunk.pending),
        (state, _) => {
          state.contacts.isLoading = true;
          state.contacts.error = '';
        }
      )
      .addMatcher(
        isAnyOf(getContactsThunk.rejected, removeContactThunk.rejected),
        (state, { payload }) => {
          state.contacts.isLoading = true;
          if (payload instanceof Error) {
            state.contacts.error = payload.message;
          }
        }
      );
  },
});

export const { addContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
