import { mount, shallow } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Prueba SearchScreen', () => {
  const history = {
    push: jest.fn(),
  };

  test('debe de mostrarse correctamente ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un heroe');
  });

  test('debe mostrar a batman y al input con el valor del query', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find('input').prop('value')).toBe('batman');
  });

  test('debe mostrar de mostrar un error si no se encuentra el heroes', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=aaa']}>
        <Route path='/search' component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay heroes');
  });

  test('debe de llamar el push del history', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route
          path='/search'
          component={(props) => <SearchScreen history={history} />}
        />
      </MemoryRouter>
    );
    wrapper
      .find('input')
      .simulate('change', { target: { name: 'searchText', value: 'batman' } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(history.push).toHaveBeenLastCalledWith(`?q=batman`);
  });
});
