import React from 'react';
import { Button, ButtonGroup } from 'shards-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 py-4'>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            saepe molestias magni laudantium vero in exercitationem cum est
            ullam eos. Magni, numquam aut! Quod inventore, nemo ut laborum qui
            libero.
          </div>
          <div>
            <ButtonGroup size='md' className='mr-2'>
              <Link to='/planets'>
                <Button>Planets</Button>
              </Link>
              <Link to='/people'>
                <Button>People</Button>
              </Link>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
