import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerComponent = ({ color }) => {
  const spinnerSize = {
    width: '100%',
    height: '100%'
  };

  return <Spinner animation='grow' variant={color} style={spinnerSize} />;
};

export default SpinnerComponent;
