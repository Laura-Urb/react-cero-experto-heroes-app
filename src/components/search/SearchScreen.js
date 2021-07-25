import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroeListItem } from '../heroes/HeroeListItem';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [formValue, handleInputChange, reset] = useForm({
    searchText: q,
  });
  const { searchText } = formValue;
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div className='row'>
      <div className='col-5'>
        <h1>Search Screen</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Find your hero'
            className='form-control'
            name='searchText'
            value={searchText}
            autoComplete='off'
            onChange={handleInputChange}
          />
          <div className='d-grid gap-2'>
            <button type='submit' className='btn mt-2 btn-outline-primary'>
              Search
            </button>
          </div>
        </form>
      </div>
      <div className='col-7'>
        <h4>Resultados</h4>
        <hr />
        {q === '' && <div className='alert alert-info'>Buscar un heroe</div>}
        {q !== '' && heroesFiltered.length === 0 && (
          <div className='alert alert-danger'>No hay heroes</div>
        )}
        {heroesFiltered.map((heroe) => (
          <HeroeListItem key={heroe.id} {...heroe} />
        ))}
      </div>
    </div>
  );
};
