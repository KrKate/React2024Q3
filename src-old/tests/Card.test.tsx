// import { fireEvent, render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore, Store } from '@reduxjs/toolkit';
// import Card from '../components/Card/Card';
// import { Product } from '../models';
// import { rootReducer } from '../redux/reducers';
// import { setIsDetailsOpen, setSelectedId } from '../redux/store/homePageSlice';

// describe('Card component', () => {
//   const mockProduct: Product = {
//     id: 1,
//     title: 'Test Product',
//     price: 10,
//     description: 'Description',
//     images: 'image.jpg',
//   };

//   const renderWithStore = (store: Store) => {
//     return render(
//       <Provider store={store}>
//         <Card product={mockProduct} />
//       </Provider>
//     );
//   };

//   it('renders the product title and price', () => {
//     const store = configureStore({ reducer: rootReducer });
//     const { getByText } = renderWithStore(store);

//     expect(getByText('Test Product')).toBeInTheDocument();
//     expect(getByText('10 $')).toBeInTheDocument();
//   });

//   it('opens detailed card component on click', () => {
//     const store = configureStore({ reducer: rootReducer });
//     const { getByTestId } = renderWithStore(store);

//     const cardElement = getByTestId('cardTest');
//     fireEvent.click(cardElement);

//     const { selectedId } = store.getState().homePage;
//     expect(selectedId).toBe(1);
//   });

//   it('closes detailed card component when clicked again', () => {
//     const store = configureStore({ reducer: rootReducer });
//     store.dispatch(setSelectedId(1));
//     store.dispatch(setIsDetailsOpen(true));

//     const { getByTestId } = renderWithStore(store);
//     const cardElement = getByTestId('cardTest');

//     fireEvent.click(cardElement);

//     const { selectedId } = store.getState().homePage;
//     expect(selectedId).toBe(null);
//   });

//   it('toggles product selection when button is clicked', () => {
//     const store = configureStore({ reducer: rootReducer });
//     const { getByText } = renderWithStore(store);
//     const buttonElement = getByText('Choose me!');
//     fireEvent.click(buttonElement);
//     const { chosenProducts } = store.getState().choose;
//     expect(chosenProducts).toContainEqual({
//       id: mockProduct.id,
//       title: mockProduct.title,
//       price: mockProduct.price,
//       description: mockProduct.description,
//     });
//     fireEvent.click(buttonElement);
//     const updatedChosenProducts = store.getState().choose.chosenProducts;

//     expect(updatedChosenProducts).not.toContainEqual({
//       id: mockProduct.id,
//       title: mockProduct.title,
//       price: mockProduct.price,
//       description: mockProduct.description,
//     });
//   });

//   it('handles keyboard events correctly', () => {
//     const store = configureStore({ reducer: rootReducer });
//     const { getByTestId } = renderWithStore(store);

//     const cardElement = getByTestId('cardTest');

//     fireEvent.keyDown(cardElement, { key: 'Enter', code: 'Enter' });

//     const { selectedId } = store.getState().homePage;
//     expect(selectedId).toBe(1);
//   });
// });
