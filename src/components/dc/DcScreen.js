import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const DcScreen = () => {
  return (
    <>
      <h1>DC Screen</h1>
      <hr />
      <HeroesList publisher={'DC Comics'} />
    </>
  );
};
