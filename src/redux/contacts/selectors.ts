import { ContactSingle } from '@/components/ContactForm/ContactForm.types';
import { createSelector } from '@reduxjs/toolkit';

interface IGeneralStore {
  contacts: {
    contacts: {
      items: ContactSingle[];
      isLoading: boolean;
      error: string;
    };
    filter: string;
  };
}

export const getContacts = (state: IGeneralStore) =>
  state.contacts.contacts.items;
export const getFilter = (state: IGeneralStore) => state.contacts.filter;
export const getError = (state: IGeneralStore) => state.contacts.contacts.error;
export const getIsLoading = (state: IGeneralStore) =>
  state.contacts.contacts.isLoading;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }
);
