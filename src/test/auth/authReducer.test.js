import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas authReducer', () => {
  test('debe de retornar el estado por default ', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  test('debe de autenticar y poner el nombre del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Juan',
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: 'Juan' });
  });
  test('debe de borrar el name al desloguear', () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: true, name: 'Juan' }, action);
    expect(state).toEqual({ logged: false });
  });
});
