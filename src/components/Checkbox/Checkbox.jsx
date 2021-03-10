import React from 'react';
import { FormCheckbox } from 'shards-react';

const CheckboxComponent = () => {
  return (
    <div>
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
  );
};

export default CheckboxComponent;
