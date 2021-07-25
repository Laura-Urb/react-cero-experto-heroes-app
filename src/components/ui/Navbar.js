import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace('/login');
  };
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Asociaciones
        </Link>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <div className='navbar-nav me-auto mb-2 mb-lg-0'>
            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/marvel'
            >
              Marvel
            </NavLink>
            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/dc'
            >
              DC
            </NavLink>
            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/search'
            >
              Buscar
            </NavLink>
          </div>
          <div className='d-flex'>
            <span className='nav-item nav-link text-info'>{name}</span>
            <button className='nav-item nav-link btn' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
