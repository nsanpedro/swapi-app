import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'shards-react';

const CardComponent = ({ data, type }) => {
  return (
    <Card style={{ maxWidth: '100%' }}>
      <CardBody>
        <CardTitle>Name: {data && data.name}</CardTitle>
        <CardSubtitle>
          {type === 'planet'
            ? `Population: ${data && data.population}`
            : `Birth Year: ${data && data.birth_year}`}
        </CardSubtitle>
        {type === 'planet'
          ? `Climate: ${data && data.climate}`
          : `Gender: ${data && data.gender}`}
        <br />
        {type === 'planet'
          ? `Orbital Period: ${data && data.orbital_period}`
          : `Mass: ${data && data.mass}`}
      </CardBody>
    </Card>
  );
};

export default CardComponent;
