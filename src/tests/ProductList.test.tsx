import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductList from '../components/productList/ProductList';
import { Product } from '../models';

// test('renders specified number of cards', () => {
//   const products = [
//     {
//       id: 1,
//       title: 'Product 1',
//       description: 'Description 1',
//       price: 10,
//       images: 'image1.jpg',
//     },
//     {
//       id: 2,
//       title: 'Product 2',
//       description: 'Description 2',
//       price: 20,
//       images: 'image2.jpg',
//     },
//     {
//       id: 3,
//       title: 'Product 3',
//       description: 'Description 3',
//       price: 30,
//       images: 'image3.jpg',
//     },
//   ];
//   const page = 1;
//   const { queryAllByTestId } = render(
//     <MemoryRouter>
//       <ProductList products={products} page={page} toggleDetails={() => {}} />
//     </MemoryRouter>
//   );

//   const cards = queryAllByTestId('card');
//   expect(cards.length).toBe(products.length);
// });

test('displays "Product not found" message if no products are available', () => {
  const products: Product[] = [];
  const page = 1;

  const { getByText } = render(
    <ProductList products={products} page={page} toggleDetails={() => {}} />
  );

  const message = getByText('Product not found');
  expect(message).toBeInTheDocument();
});

describe('ProductList', () => {
  const mockProducts: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Description 1',
      price: 10,
      images: 'image1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Description 2',
      price: 20,
      images: 'image2.jpg',
    },
  ];

  const toggleDetailsMock = vi.fn();

  it('renders the correct number of cards', () => {
    render(
      <MemoryRouter>
        <ProductList
          products={mockProducts}
          toggleDetails={toggleDetailsMock}
          page={1}
        />
      </MemoryRouter>
    );

    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(mockProducts.length);
  });
});
