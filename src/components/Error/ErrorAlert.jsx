import React from 'react';
import { Alert } from 'shards-react';
import { DATA_ERROR, BACK_HOME } from '../../config/config';

const ErrorAlert = () => (
  <div>
    <Alert theme='danger'>
      {DATA_ERROR} -{' '}
      <a className='alert-link' href='/'>
        {BACK_HOME}
      </a>
    </Alert>
  </div>
);

export default ErrorAlert;
