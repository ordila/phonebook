import { useAppSelector } from '@/hooks/useAppSelector';
import { selectIsLoggedIn } from '@/redux/auth/selectors';

import { FC, ComponentType } from 'react';

import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes/routes.constants';
const { LOGIN } = ROUTES;

interface PrivateRouteProps {
  redirectPath?: string;
}

const PrivateRoute = <P extends object>(
  Component: ComponentType<P>
): FC<P & PrivateRouteProps> => {
  const PrivateComponent: FC<P> = props => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    const { redirectPath = `/${LOGIN}` } = props as PrivateRouteProps;
    return isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Navigate to={redirectPath} />
    );
  };

  return PrivateComponent;
};

export default PrivateRoute;
