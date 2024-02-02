import PublicRoutes from '@/HOC/PublicRoute';
import { LoginForm } from '@/components/LoginForm/LoginForm';
import { RegisterForm } from '@/components/RegisterForm/RegisterForm';

import { FC } from 'react';
import { useLocation } from 'react-router-dom';

const Auth: FC = () => {
  const { pathname } = useLocation();

  const formToAuth = pathname === '/login';
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="p-20 border-solid border-2 border-[#1876D1] border-opacity-80 rounded-[10px]">
        {formToAuth ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};
export default PublicRoutes(Auth);
