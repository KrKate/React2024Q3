// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import createMockStore from 'redux-mock-store';
// import Footer from '../components/Footer/Footer';
// import {
//   initialState,
//   ProductInfo,
//   unselectAllProducts,
// } from '../redux/store/chooseSlice';

// const mockStore = createMockStore<{
//   choose: { chosenProducts: ProductInfo[] };
// }>();

// describe('Footer component', () => {
//   it('renders the unselected all button', () => {
//     const store = mockStore({
//       choose: initialState,
//     });

//     render(
//       <Provider store={store}>
//         <Footer />
//       </Provider>
//     );

//     const unselectAllButton = screen.getByRole('button', {
//       name: /unselect all/i,
//     });
//     expect(unselectAllButton).toBeInTheDocument();
//   });

//   it('renders the correct number of chosen products', () => {
//     const chosenProducts: ProductInfo[] = [
//       { id: 1, title: 'Product 1', price: 100, description: 'Description 1' },
//       { id: 2, title: 'Product 2', price: 200, description: 'Description 2' },
//       { id: 3, title: 'Product 3', price: 300, description: 'Description 3' },
//     ];
//     const store = mockStore({
//       choose: { chosenProducts },
//     });

//     render(
//       <Provider store={store}>
//         <Footer />
//       </Provider>
//     );

//     const chosenProductsText = screen.getByText('You choose 3 products');
//     expect(chosenProductsText).toBeInTheDocument();
//   });

//   it('dispatches unselectAllProducts action when the unselect all button is clicked', () => {
//     const store = mockStore({
//       choose: initialState,
//     });

//     render(
//       <Provider store={store}>
//         <Footer />
//       </Provider>
//     );

//     const unselectAllButton = screen.getByRole('button', {
//       name: /unselect all/i,
//     });
//     fireEvent.click(unselectAllButton);

//     const actions = store.getActions();
//     expect(actions).toEqual([unselectAllProducts()]);
//   });
// });
