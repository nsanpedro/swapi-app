import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'shards-react';

const CardComponent = ({ data }) => {
  return (
    <Card style={{ maxWidth: '100%' }}>
      <CardBody>
        <CardTitle>Name: {data && data.name}</CardTitle>
        <CardSubtitle>Population: {data && data.population}</CardSubtitle>
        Climate: {data && data.climate} <br />
        Orbital Period: {data && data.orbital_period}
      </CardBody>
    </Card>
  );
};

export default CardComponent;
