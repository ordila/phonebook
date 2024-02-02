import { FC, createContext, useEffect } from 'react';

import { useAppDispatch } from '@/hooks';

import { getVisibleContacts } from '@/redux/contacts/selectors';
import { getContactsThunk } from '@/redux/contacts/operations';
import { useSelector } from 'react-redux';

import { ContactListItem } from '@/components';

import { ContactSingle } from '../ContactForm/ContactForm.types';

export const ContactContext = createContext<ContactSingle>({
  createdAt: '',
  name: '',
  number: '',
  id: '',
});

const ContactList: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul className="flex flex-wrap gap-3 justify-center items-start">
      {visibleContacts.map(contact => (
        <ContactContext.Provider value={contact} key={contact.id}>
          <ContactListItem />
        </ContactContext.Provider>
      ))}
    </ul>
  );
};
export default ContactList;
