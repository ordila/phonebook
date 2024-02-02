import { ContactSingle } from '@/components/ContactForm/ContactForm.types';

export interface IGeneralState {
  user: IUserState;
  contacts: IContactState;
}

interface IUserState {
  user: {
    name: string;
    email: string;
  };
  token: null | string;
  isLoggedIn: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  error: boolean;
}

interface IContactState {
  contacts: {
    items: ContactSingle[];
    isLoading: boolean;
    error: string;
  };
  filter: string;
}
