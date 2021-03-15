import React from 'react';
import { Alert } from 'shards-react';
import { Link } from 'react-router-dom';

const ErrorAlert = () => {
  return (
    <div>
      <Alert theme='danger'>
        Could not Fetch Data, please try again. -{' '}
        <Link to='/'>
          <p className='alert-link'>Return To Home</p>
        </Link>
      </Alert>
    </div>
  );
};

export default ErrorAlert;
