import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Select from 'react-select';
import {
  selectOptions,
  NAVIGATE_TO,
  SORT_BY,
  PEOPLE,
  PLANETS,
  PEOPLE_PATH,
  PLANETS_PATH
} from '../../config/config';

const SortingComponent = ({ onSortChange }) => {
  const location = useLocation();

  const redirectPath =
    location.pathname === PLANETS_PATH ? PEOPLE_PATH : PLANETS_PATH;

  const navigateTo = location.pathname === PLANETS_PATH ? PEOPLE : PLANETS;

  return (
    <div className='border rounded'>
      <div className='mx-3 py-3'>
        <div className='pb-4'>
          {NAVIGATE_TO} <Link to='/'>Home</Link> /{' '}
          <Link to={redirectPath}>{navigateTo}</Link>
        </div>
        <p>{SORT_BY}</p>
        <Select
          options={selectOptions}
          onChange={onSortChange}
          defaultValue={selectOptions[0]}
        />
      </div>
    </div>
  );
};

export default SortingComponent;
