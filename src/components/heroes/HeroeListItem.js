import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/herosImages';

export const HeroeListItem = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card mb-3' style={{ maxWidth: 540 }}>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img
              src={heroImages(`./${id}.jpg`).default}
              className='img-fluid rounded-start'
              alt={superhero}
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              {alter_ego !== characters && (
                <p className='card-text'>{characters}</p>
              )}
              <p className='text-muted'>{first_appearance}</p>
              <Link to={`./heroe/${id}`}>Más..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
