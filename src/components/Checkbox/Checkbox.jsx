import React from 'react';
import { FormCheckbox } from 'shards-react';

const CheckboxComponent = () => {
  return (
    <div className='border rounded'>
      <div className='mx-3 py-3'>
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
