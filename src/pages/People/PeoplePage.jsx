import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Button, Badge } from 'shards-react';
import { useQuery } from 'react-query';
import {
  NEXT,
  PREVIOUS,
  ASC,
  DSC,
  DEFAULT,
  PEOPLE_TYPE,
  SUCCESS_STATUS,
  LOADING_STATUS,
  ERROR_STATUS
} from '../../config/config';
import PeopleService from '../../services/PeopleService';
import SortComponent from '../../components/Sort/Sort';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';

const PeoplePage = () => {
  const [pageSelected, setPageSelected] = useState(1);
  const [sortSelected, setSortSelected] = useState(ASC);

  const getPeople = async () => {
    const res = await PeopleService.getPeople(pageSelected);

    return res.json();
  };

  const { data, status } = useQuery([PEOPLE_TYPE, pageSelected], getPeople, {
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
    getPeople();
  }, []);

  const cardBodySorted = (type) => {
    const sortedResults = type === ASC ? sortDataAsc() : sortDataDsc();

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
    []
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
          {PREVIOUS}
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
          {NEXT}
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
              {status === LOADING_STATUS && <Spinner />}
              {status === ERROR_STATUS && <div>ERROR</div>}
              {status === SUCCESS_STATUS && (
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

export default PeoplePage;
