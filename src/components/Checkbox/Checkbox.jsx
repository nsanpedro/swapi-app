import React, { useState } from 'react';
import { FormCheckbox } from 'shards-react';
import { Link, useLocation } from 'react-router-dom';
import Select from 'react-select';
import { selectOptions } from '../../config/config';

const CheckboxComponent = ({ onSortChange }) => {
  // const [sortSelected, setSortSelected] = useState();
  const location = useLocation();

  const redirectPath =
    location.pathname === '/planets' ? '/people' : '/planets';

  const navigateTo = location.pathname === '/planets' ? 'People' : 'Planets';

  // const onSortChange = (option) => {
  //   setSortSelected(option.value);
  // };

  return (
    <div className='border rounded'>
      <div className='mx-3 py-3'>
        <div className='pb-4'>
          Navigate To: <Link to='/'>Home</Link> /{' '}
          <Link to={redirectPath}>{navigateTo}</Link>
        </div>
        <p className='pt-4'>Select your favorite fruits:</p>
        <FormCheckbox checked={true} onChange={(e) => console.log('checked!')}>
          Orange
        </FormCheckbox>
        <FormCheckbox checked={true} onChange={(e) => console.log('checked!')}>
          Lemon
        </FormCheckbox>
        <FormCheckbox checked={true} onChange={(e) => console.log('checked!')}>
          Kiwi
        </FormCheckbox>{' '}
        <br />
        <p>Sort by:</p>
        <Select options={selectOptions} onChange={onSortChange} />
      </div>
    </div>
  );
};

export default CheckboxComponent;
