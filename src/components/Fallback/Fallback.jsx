import React from 'react';
import { FALLBACK_STRING } from '../../config/config';

const Fallback = () => (
  <div className='text-center center-absolute'>
    <div className='spinner-border text-danger' role='status'>
      <span className='sr-only'>{FALLBACK_STRING}</span>
    </div>
    <div>{FALLBACK_STRING}</div>
  </div>
);

export default Fallback;
