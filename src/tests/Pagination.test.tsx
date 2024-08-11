import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import server from '../../mock/server';
import Pagination from '../pages/components/Pagination/Pagination';

const mockStore = configureMockStore();
const store = mockStore({
  homePage: {
    total: 30,
    limit: 10,
  },
  pagination: {
    totalPages: 3,
    currentPage: 1,
  },
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Pagination', () => {
  test('renders pagination buttons correctly', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });
  });
});
