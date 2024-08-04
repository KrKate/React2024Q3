// import { render, screen, waitFor } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { http, HttpResponse } from 'msw';
// import store from '../redux/store/index';
// import ProductList from '../components/productList/ProductList';
// import server from '../../mock/server';

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe('ProductList', () => {
//   test.skip('renders products correctly', async () => {
//     render(
//       <Provider store={store}>
//         <ProductList />
//       </Provider>
//     );

//     await waitFor(() => {
//       expect(screen.getByText('Annibale Colombo Bed')).toBeInTheDocument();
//       expect(screen.getByText('Annibale Colombo Sofa')).toBeInTheDocument();
//     });
//   });

//   test('shows message when no products are found', async () => {
//     server.use(
//       http.get('https://dummyjson.com/products?limit=10&skip=10', () => {
//         return HttpResponse.json({
//           products: [],
//           total: 0,
//           skip: 0,
//           limit: 10,
//         });
//       })
//     );

//     render(
//       <Provider store={store}>
//         <ProductList />
//       </Provider>
//     );

//     await waitFor(() => {
//       expect(screen.getByText('Product not found')).toBeInTheDocument();
//     });
//   });
// });
