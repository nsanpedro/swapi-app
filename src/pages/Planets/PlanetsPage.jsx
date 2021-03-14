import React, { useEffect, useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { Button, Badge } from 'shards-react';
import SortComponent from '../../components/Sort/Sort';
import Card from '../../components/Card/Card';
import PlanetsService from '../../services/PlanetsService';
import Spinner from '../../components/Spinner/Spinner';
import { useCallback } from 'react';

const PlanetsPage = () => {
  const [pageSelected, setPageSelected] = useState(1);
  const [sortSelected, setSortSelected] = useState('');

  const getPlanets = async () => {
    const res = await PlanetsService.getPlanets(pageSelected);

    return res.json();
  };

  const { data, status } = useQuery(['planets', pageSelected], getPlanets, {
    keepPreviousData: true
  });

  const onSortChange = (option) => {
    setSortSelected(option.value);
  };

  const sortDataAsc = () => {
    if (data) {
      const sortedCharacters =
        data &&
        data.results &&
        data.results.sort((a, b) => a.name.localeCompare(b.name));

      return sortedCharacters;
    }
  };

  const sortDataDsc = () => {
    if (data) {
      const sortedCharacters =
        data &&
        data.results &&
        data.results.sort((a, b) => b.name.localeCompare(a.name));

      return sortedCharacters;
    }
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const cardBodySorted = (type) => {
    const sortedResults = type === 'asc' ? sortDataAsc() : sortDataDsc();

    return (
      <div className='py-2'>
        {data &&
          sortedResults.map((character, i) => (
            <div key={i} className='py-2'>
              <Card data={character} type={'people'} />
            </div>
          ))}
      </div>
    );
  };

  const navigationComponent = useCallback(
    () => (
      <div className='py-4'>
        <SortComponent onSortChange={onSortChange} />
      </div>
    ),
    [onSortChange]
  );

  const paginationComponent = useMemo(
    () => (
      <div className='d-flex'>
        <Button
          outline
          pill
          size='sm'
          onClick={() => setPageSelected((old) => Math.max(old - 1, 1))}
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
          onClick={() => setPageSelected((old) => Math.max(old + 1))}
          disabled={data && !data.next}
        >
          Next
        </Button>
      </div>
    ),
    [pageSelected, data, setPageSelected]
  );

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-6 col-md-4'>{navigationComponent()}</div>
          <div className='col-md-8'>
            <div className='py-4'>
              {status === 'loading' && <Spinner />}
              {status === 'error' && <div>ERROR</div>}
              {status === 'success' && (
                <>
                  {paginationComponent}
                  {cardBodySorted(sortSelected)}
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
