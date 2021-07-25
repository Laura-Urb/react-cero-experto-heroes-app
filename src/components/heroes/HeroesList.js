import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeListItem } from './HeroeListItem';

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {heroes.map((heroe) => (
        <HeroeListItem key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};
