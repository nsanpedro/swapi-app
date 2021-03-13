import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Button, Badge } from 'shards-react';
import CheckboxComponent from '../../components/Sort/Sort';
import Card from '../../components/Card/Card';
import PlanetsService from '../../services/PlanetsService';
import Spinner from '../../components/Spinner/Spinner';

const PlanetsPage = () => {
  const [pageSelected, setPageSelected] = useState(1);

  const getPlanets = async () => {
    const res = await PlanetsService.getPlanets(pageSelected);

    return res.json();
  };

  const { data, status } = useQuery(['planets', pageSelected], getPlanets, {
    keepPreviousData: true
  });

  useEffect(() => {
    getPlanets();
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
                      data.results.map((planet, i) => (
                        <div key={i} className='py-2'>
                          <Card data={planet} type={'planet'} />
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

export default PlanetsPage;
