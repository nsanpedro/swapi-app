import React from 'react';
import PeopleService from '../../services/PeopleService';
import CheckboxComponent from '../../components/Checkbox/Checkbox';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import { useQuery } from 'react-query';

const PeoplePage = () => {
  const getPeople = async () => {
    const res = await PeopleService.getPeople();

    return res.json();
  };

  const { data, status } = useQuery('people', getPeople);

  // console.log('people ==> ', data);

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
                data.results.map((person) => (
                  <div className='py-2'>
                    <Card data={person} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeoplePage;
