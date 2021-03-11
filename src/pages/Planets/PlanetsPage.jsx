import React, { useEffect } from 'react';
import CheckboxComponent from '../../components/Checkbox/Checkbox';
import { useQuery } from 'react-query';
import Card from '../../components/Card/Card';
import PlanetsService from '../../services/PlanetsService';
import Spinner from '../../components/Spinner/Spinner';

const PlanetsPage = () => {
  const getPlanets = async () => {
    const res = await PlanetsService.myFetch();

    return res.json();
  };

  const { data, status } = useQuery('planets', getPlanets);

  // console.log('data ==> ', data);

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
              {status === 'loading' && <Spinner />}
              {status === 'error' && <div>ERROR</div>}
              {status === 'success' &&
                data &&
                data.results.map((planet) => (
                  <div className='py-2'>
                    <Card data={planet} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetsPage;
