import React from 'react';
import { Alert } from 'shards-react';
import { Link } from 'react-router-dom';

const ErrorAlert = () => {
  return (
    <div>
      <Alert theme='danger'>
        Could not Fetch Data, please try again. -{' '}
        <a className='alert-link' href='/'>
          Return To Home
        </a>
      </Alert>
    </div>
  );
};

export default ErrorAlert;
