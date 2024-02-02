import { useAppDispatch, useAppSelector } from '@/hooks/';

import { logOutThunk } from '@/redux/auth/operations';
import { selectEmail, selectIsLoggedIn } from '@/redux/auth/selectors';

import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const email = useAppSelector(selectEmail);
  const dispatch = useAppDispatch();

  const handleCloseItem = () => {
    dispatch(logOutThunk());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            InContact
          </Typography>
          <Link className="hover:scale-110 transition-all" to="/">
            Home
          </Link>

          {!isLoggedIn ? (
            <>
              <Link
                className="ml-[20px] mr-[20px] hover:scale-110 transition-all"
                to="login"
              >
                Login
              </Link>
              <Link
                className=" hover:scale-110 transition-all"
                to="registration"
              >
                Registration
              </Link>
            </>
          ) : (
            <>
              <Link
                className="mr-[20px] ml-[20px] hover:scale-110 transition-all"
                to="phonebook"
              >
                Phonebook
              </Link>
              <p className="mr-[20px]">{email}</p>
              <Button
                style={{ backgroundColor: '#ca4646' }}
                variant="contained"
                onClick={handleCloseItem}
              >
                LOGOUT
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
