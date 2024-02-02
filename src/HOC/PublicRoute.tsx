import { useAppSelector } from '@/hooks/useAppSelector';
import { selectIsLoggedIn } from '@/redux/auth/selectors';
import { FC, ComponentType } from 'react';

import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes/routes.constants';
const { PHONEBOOK } = ROUTES;

interface PublicRouteProps {
  redirectPath?: string;
}

const PublicRoutes = <P extends object>(Component: ComponentType<P>): FC<P> => {
  const PrivateComponent: FC<P & PublicRouteProps> = props => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    const { redirectPath = `/${PHONEBOOK}` } = props as PublicRouteProps;
    return isLoggedIn ? (
      <Navigate to={redirectPath} />
    ) : (
      <Component {...props} />
    );
  };

  return PrivateComponent;
};

export default PublicRoutes;
