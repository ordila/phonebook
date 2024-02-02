import PrivateRoute from '@/HOC/PrivateRoute';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import ContactList from '@/components/ContactList/ContactList';
import Filter from '@/components/Filter/Filter';

const Phonebook = () => {
  return (
    <div>
      <h2 className="text-center mt-[20px] mb-[10px] font-bold text-[20px]">
        Contact Form
      </h2>
      <ContactForm />
      <h2 className="text-center mt-[20px] mb-[10px] font-bold text-[20px]">
        Filter
      </h2>
      <Filter />

      <ContactList />
    </div>
  );
};

export default PrivateRoute(Phonebook);
