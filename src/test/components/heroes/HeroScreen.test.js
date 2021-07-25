import { mount, shallow } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Prueba HeroScreen', () => {
  const historyMock = {
    push: jest.fn(),
    length: 10,
    goBack: jest.fn(),
  };

  test('debe mostrarse el componente redirect si no hay argumentos en el url ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe']}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('debe mostrarse un heroes si el parameturo existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route path='/heroe/:heroeId' component={HeroScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);
  });

  test('debe de regresar a la pantalla home con push', () => {
    const historyMock = {
      push: jest.fn(),
      length: 1,
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route
          path='/heroe/:heroeId'
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test('debe de regresar a la pantalla anterior', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route
          path='/heroe/:heroeId'
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledTimes(0);
    expect(historyMock.goBack).toHaveBeenCalled();
  });
  test('debe de llamar el redirect si el heroes no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider78787878787878']}>
        <Route
          path='/heroe/:heroeId'
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );
    expect(wrapper.text()).toBe('');
  });
});
