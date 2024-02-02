import { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppWrapper } from './index';
import { Home, Auth, Phonebook } from '@/pages';

import { useAppDispatch, useAppSelector } from '@/hooks';

import { reloadThunk } from '@/redux/auth/operations';
import { isRefreshing } from '@/redux/auth/selectors';

import { Loader } from './Loader/Loader';

import { ROUTES } from '@/constants/routes/routes.constants';
const { HOME, LOGIN, REGISTRATION, PHONEBOOK } = ROUTES;

export const App: FC = () => {
  const dispatch = useAppDispatch();

  const isRefresh = useAppSelector(isRefreshing);

  useEffect(() => {
    dispatch(reloadThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
    <div>
      <BrowserRouter basename="go-it-react-hw-08-phonebook">
        <Routes>
          <Route path={HOME} element={<AppWrapper />}>
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Auth />} />
            <Route path={REGISTRATION} element={<Auth />} />
            <Route path={PHONEBOOK} element={<Phonebook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
