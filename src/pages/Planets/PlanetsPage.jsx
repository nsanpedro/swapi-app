import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import PlanetsService from '../../services/PlanetsService';
import CheckboxComponent from '../../components/Checkbox/Checkbox';

const PlanetsPage = () => {
  useEffect(() => {
    PlanetsService.getPlanets()
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

export default PlanetsPage;
