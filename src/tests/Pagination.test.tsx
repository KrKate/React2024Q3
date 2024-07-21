import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { vi, vitest } from 'vitest';
import Pagination from '../components/Pagination/Pagination';

vi.mock('react-router-dom', () => ({
  ...vitest.importActual('react-router-dom'),
  Link: vi.fn().mockImplementation(({ children }) => children),
}));

const mockStore = createMockStore();

describe('Pagination component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      homePage: {
        total: 100,
        limit: 10,
      },
      pagination: {
        totalPages: 10,
        currentPage: 1,
      },
    });
  });

  it('should render correct number of pages', () => {
    const { container } = render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    const pages = container.querySelectorAll('button');
    expect(pages.length).toBe(10);
  });
});
