import { useAppSelector } from '@/hooks';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/routes/routes.constants';
const { LOGIN, PHONEBOOK } = ROUTES;

export const Home = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website!</h1>
      <p className="text-lg mb-8">We're glad to have you here.</p>

      {!isLoggedIn ? (
        <Link to={`/${LOGIN}`} className="text-blue-500 hover:underline">
          Go to Login
        </Link>
      ) : (
        <Link to={`/${PHONEBOOK}`} className="text-blue-500 hover:underline">
          Go to Phonebook
        </Link>
      )}
    </div>
  );
};
