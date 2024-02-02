import { FC } from 'react';
import { Header } from '@/components';
import { Outlet } from 'react-router-dom';

export const AppWrapper: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
