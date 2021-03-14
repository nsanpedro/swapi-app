import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Select from 'react-select';
import { selectOptions } from '../../config/config';

const SortingComponent = ({ onSortChange }) => {
  const location = useLocation();

  const redirectPath =
    location.pathname === '/planets' ? '/people' : '/planets';

  const navigateTo = location.pathname === '/planets' ? 'People' : 'Planets';

  return (
    <div className='border rounded'>
      <div className='mx-3 py-3'>
        <div className='pb-4'>
          Navigate To: <Link to='/'>Home</Link> /{' '}
          <Link to={redirectPath}>{navigateTo}</Link>
        </div>
        <p>Sort by:</p>
        <Select options={selectOptions} onChange={onSortChange} />
      </div>
    </div>
  );
};

export default SortingComponent;
