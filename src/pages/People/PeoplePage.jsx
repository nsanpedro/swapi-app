import React, { useState, useEffect } from 'react';
import { Button, Badge } from 'shards-react';
import { useQuery } from 'react-query';
import PeopleService from '../../services/PeopleService';
import CheckboxComponent from '../../components/Checkbox/Checkbox';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';

const PeoplePage = () => {
  const [pageSelected, setPageSelected] = useState(1);

  const getPeople = async () => {
    const res = await PeopleService.getPeople(pageSelected);

    return res.json();
  };

  const { data, status } = useQuery(['people', pageSelected], getPeople, {
    keepPreviousData: true
  });

  useEffect(() => {
    getPeople();
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
              {status === 'loading' && <Spinner />}
              {status === 'error' && <div>ERROR</div>}
              {status === 'success' && (
                <>
                  <div className='d-flex'>
                    <Button
                      outline
                      pill
                      size='sm'
                      onClick={() =>
                        setPageSelected((old) => Math.max(old - 1, 1))
                      }
                      disabled={pageSelected === 1}
                    >
                      Previous
                    </Button>

                    <div className='mx-3'>
                      <Badge outline pill theme='light'>
                        {pageSelected}
                      </Badge>
                    </div>
                    <Button
                      outline
                      pill
                      size='sm'
                      onClick={() =>
                        setPageSelected((old) => Math.max(old + 1))
                      }
                      disabled={!data.next}
                    >
                      Next
                    </Button>
                  </div>

                  <div className='py-2'>
                    {data &&
                      data.results.map((people, i) => (
                        <div key={i} className='py-2'>
                          <Card data={people} type={'people'} />
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeoplePage;
