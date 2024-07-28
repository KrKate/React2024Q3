import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { http, HttpResponse } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store/index';
import server from '../../mock/server';
import Pagination from '../components/Pagination/Pagination';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Pagination', () => {
  test.skip('renders pagination buttons correctly', async () => {
    server.use(
      http.get('https://dummyjson.com/products', () => {
        return HttpResponse.json({
          products: Array.from({ length: 30 }, (_, i) => ({
            id: i + 1,
            title: `Product ${i + 1}`,
          })),
          total: 30,
          skip: 0,
          limit: 10,
        });
      })
    );

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
      expect(screen.getByText('4')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
    });
  });

  test('shows message when error', async () => {
    server.use(
      http.get('https://dummyjson.com/p/', () => {
        return HttpResponse.json({
          products: [],
          total: 0,
          skip: 0,
          limit: 10,
        });
      })
    );

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Error loading products')).toBeInTheDocument();
    });
  });
});
