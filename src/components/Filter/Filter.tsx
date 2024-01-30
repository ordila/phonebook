import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '@/redux/contactSlice';
import { getFilter } from '@/redux/selectors';

const Filter: FC = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilterChange = (filter: string) => dispatch(setFilter(filter));

  return (
    <input
      type="text"
      name="filter"
      value={filter}
      placeholder="Filter contacts..."
      onChange={({ target }) => handleFilterChange(target.value)}
    />
  );
};
export default Filter;
