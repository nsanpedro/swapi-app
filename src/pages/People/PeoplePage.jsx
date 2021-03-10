import React, { useEffect } from 'react';
import PeopleService from '../../services/PeopleService';
import CheckboxComponent from '../../components/Checkbox/Checkbox';
import Card from '../../components/Card/Card';

const PeoplePage = () => {
  useEffect(() => {
    PeopleService.getPeople()
      .then((res) => console.log('res ==> ', res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-6 col-md-4'>
            <div className='py-4'>
              <CheckboxComponent />
            </div>
          </div>
          <div className='col-md-8'>
            <div className='py-4'>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeoplePage;
