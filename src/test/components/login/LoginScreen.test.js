import { mount, shallow } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas LoginScreen', () => {
  const authContext = {
    user: {
      logged: false,
    },
    dispatch: jest.fn(),
  };
  const history = {
    replace: jest.fn(),
  };
  const wrapper = mount(
    <AuthContext.Provider value={authContext}>
      <LoginScreen history={history} />
    </AuthContext.Provider>
  );
  test('debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de hacer el dispatch cuando apreta el boton ', () => {
    const handleClick = wrapper.find('button').prop('onClick');
    handleClick();
    expect(authContext.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Juan',
      },
    });
    expect(history.replace).toHaveBeenCalled();
    localStorage.setItem('lasPath', '/dc');
    handleClick();
    expect(history.replace).toHaveBeenCalledWith('/dc');
  });
});
