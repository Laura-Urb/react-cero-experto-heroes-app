import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { heroImages } from '../../helpers/herosImages';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();
  const heroe = useMemo(() => getHeroesById(heroeId), [heroeId]);
  if (!heroe) {
    return <Redirect to='/' />;
  }
  const { superhero, alter_ego, first_appearance, characters, publisher } =
    heroe;

  const handleReturn = () => {
    if (history.length <= 2) history.push('/');
    else history.goBack();
  };

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          // src={`../assets/heroes/${heroeId}.jpg`}
          src={heroImages(`./${heroeId}.jpg`).default}
          className='img-thumbnail animate__animated animate__fadeInLeft'
          alt={superhero}
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group mb-3'>
          <li className='list-group-item'>Alter ego: {alter_ego}</li>
          <li className='list-group-item'>Publisher: {publisher}</li>
          <li className='list-group-item'>
            First Appearance: {first_appearance}
          </li>
        </ul>
        <h5>Character</h5>
        <p>{characters}</p>
        {/* <Link to={`./heroe/${id}`}>Más..</Link> */}
        <button className='btn btn-outline-info' onClick={handleReturn}>
          Volver
        </button>
      </div>
    </div>
  );
};
