import { FC, createContext, useEffect } from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';

import { getVisibleContacts } from '@/redux/selectors';
import { getContactsThunk } from '@/redux/operations';
import { useSelector } from 'react-redux';

import { ContactListItem } from '../ContactListItem/ContactListItem';

import { ContactSingle } from '../ContactForm/ContactForm.types';

export const ContactContext = createContext<ContactSingle>({
  createdAt: '',
  name: '',
  phone: '',
  id: '',
});

const ContactList: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactContext.Provider value={contact} key={contact.id}>
          <ContactListItem />
        </ContactContext.Provider>
      ))}
    </ul>
  );
};
export default ContactList;
