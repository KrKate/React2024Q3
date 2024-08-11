import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { http, HttpResponse } from 'msw';
import configureMockStore from 'redux-mock-store';
import ProductList from '../components/productList/ProductList';
import server from '../../mock/server';
import { Product } from '../models';

const mockStore = configureMockStore();
const store = mockStore({
  homePage: {
    selectedId: null,
  },
  choose: {
    chosenProducts: [],
  },
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('ProductList', () => {
  test('renders products correctly', async () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        title: 'First',
        price: 5,
        description: 'Awesome product',
        images: `/test-image`,
      },
      {
        id: 2,
        title: 'Second',
        price: 5,
        description: 'Awesome product',
        images: `/test-image`,
      },
    ];

    server.use(
      http.get('https://dummyjson.com/products?limit=10&skip=0', () => {
        return HttpResponse.json({
          products: mockProducts,
          total: mockProducts.length,
          skip: 0,
          limit: 10,
        });
      })
    );

    render(
      <Provider store={store}>
        <ProductList
          products={mockProducts}
          currentPage={1}
          onCardClick={() => {}}
        />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('Second')).toBeInTheDocument();
    });
  });

  test('shows message when no products are found', async () => {
    server.use(
      http.get('https://dummyjson.com/products?limit=10&skip=0', () => {
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
        <ProductList products={[]} currentPage={1} onCardClick={() => {}} />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Product not found')).toBeInTheDocument();
    });
  });
});
