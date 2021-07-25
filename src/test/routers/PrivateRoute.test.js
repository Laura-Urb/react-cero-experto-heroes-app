import { mount, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Pruebas PrivateRoute', () => {
  const props = {
    location: {
      pathname: '/marvel',
    },
  };

  Storage.prototype.setItem = jest.fn();

  test('debe de mostrar el componente si está autenticado y guardar el localStorage ', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={true}
          path='/'
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lasPath',
      props.location.pathname
    );
  });

  test('debe de bloquear al usuario', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={false}
          path='/'
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lasPath',
      props.location.pathname
    );
  });

});
