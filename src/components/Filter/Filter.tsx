import { FC } from 'react';

import { setFilter } from '@/redux/contacts/contactSlice';
import { getFilter } from '@/redux/contacts/selectors';
import { TextField } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@/hooks';

const Filter: FC = () => {
  const filter = useAppSelector(getFilter);

  const dispatch = useAppDispatch();

  const handleFilterChange = (filter: string) => dispatch(setFilter(filter));

  return (
    <div className="w-[400px] mx-auto">
      <TextField
        sx={{ width: '400px', mb: 3 }}
        label="Filter contacts..."
        value={filter}
        required
        variant="outlined"
        color="secondary"
        type="text"
        autoComplete="false"
        onChange={({ target }) => handleFilterChange(target.value)}
      />
    </div>
  );
};
export default Filter;
