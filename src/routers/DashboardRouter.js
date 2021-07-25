import React from 'react';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-4'>
        <Switch>
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/dc' component={DcScreen} />
          <Route exact path='/heroe/:heroeId' component={HeroScreen} />
          <Route exact path='/search' component={SearchScreen} />
          <Redirect to='/marvel' />
        </Switch>
      </div>
    </>
  );
};
