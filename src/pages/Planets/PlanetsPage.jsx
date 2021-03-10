import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import PlanetsService from '../../services/PlanetsService';

const PlanetsPage = () => {
  useEffect(() => {
    PlanetsService.getPlanets()
      .then((res) => console.log('res ==> ', res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Card />
    </>
  );
};

export default PlanetsPage;
