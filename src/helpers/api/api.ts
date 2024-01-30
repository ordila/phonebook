import { ContactSingle } from '@/components/ContactForm/ContactForm.types';
import { instance } from '@/helpers/api/instance';

export const getContactByID = async (id: string) => {
  const { data } = await instance.get<ContactSingle>(`contacts/${id}`);
  return data;
};
