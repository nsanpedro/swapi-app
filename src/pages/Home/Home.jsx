import React from 'react';
import { Button } from 'shards-react';
import { Link } from 'react-router-dom';
import { PEOPLE, PLANETS } from '../../config/config';

const Home = () => (
  <div className='container'>
    <div className='row'>
      <div className='col-lg-12 py-4'>
        <h1 className='text-center'>Welcome to Qu Beyond Swapi Challenge</h1>
        <div className='text-center'>
          In this challenge, we need to read from the renowned Swapi API, and
          display the data in an organized way. <br />
          In addition we should be able to interact with the data with some way
          of sorting mechanic. This is the App. <br />
          Happy Navigation!
        </div>
        <div className='py-5'>
          <div className='d-flex justify-content-center'>
            <Link to='/planets'>
              <Button
                size='lg'
                className='mx-4'
                style={{ width: 300, backgroundColor: '#77cedb' }}
              >
                {PLANETS}
              </Button>
            </Link>
            <Link to='/people'>
              <Button
                size='lg'
                className='mx-4'
                style={{ width: 300, backgroundColor: '#77cedb' }}
              >
                {PEOPLE}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
