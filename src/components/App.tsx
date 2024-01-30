import { FC } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App: FC = () => {
  return (
    <div>
      <h2>Contact Form</h2>
      <ContactForm />
      <h2>Filter</h2>
      <Filter />
      <h2>Contacts</h2>
      {<ContactList />}
    </div>
  );
};
