import React from 'react';
import { FormCheckbox, Button } from 'shards-react';
import { Link } from 'react-router-dom';

const CheckboxComponent = () => {
  return (
    <div className='border rounded'>
      <div className='mx-3 py-3'>
        <div className='pb-4'>
          Navigate To: <Link to='/'>Home</Link> /{' '}
          <Link to='/people'>People</Link>
        </div>
        <p>Select your favorite fruits:</p>
        <FormCheckbox checked={true} onChange={(e) => console.log('checked!')}>
          Orange
        </FormCheckbox>
        <FormCheckbox checked={true} onChange={(e) => console.log('checked!')}>
          Lemon
        </FormCheckbox>
        <FormCheckbox checked={true} onChange={(e) => console.log('checked!')}>
          Kiwi
        </FormCheckbox>
      </div>
    </div>
  );
};

export default CheckboxComponent;
