import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { DashboardRouter } from '../../routers/DashboardRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Purebas DashboardRouter', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: true, name: 'Juan' },
  };
  test('debe mostrarse correctamente', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRouter></DashboardRouter>{' '}
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Juan');
  });
});
