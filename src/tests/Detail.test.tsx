import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { http, HttpResponse } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store/index';
import server from '../../mock/server';
import DetailsPage from '../pages/details/DetailsPage';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Detail', () => {
  test('shows message product Loading', async () => {
    server.use(
      http.get('https://dummyjson.com/products/', () => {
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
          <DetailsPage />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });
});
