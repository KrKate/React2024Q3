import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import Card from '../components/Card/Card';
import { Product } from '../models';

describe('Card component', () => {
  const mockProduct: Product = {
    id: 1,
    title: 'Test Product',
    price: 10,
    description: 'Description',
    images: 'image.jpg',
  };

  it('renders the product title and price', () => {
    const toggleDetails = vi.fn();
    const { getByText } = render(
      <Card product={mockProduct} toggleDetails={toggleDetails} />
    );
    expect(getByText('Test Product')).toBeInTheDocument();
    expect(getByText('10 $')).toBeInTheDocument();
  });

  it('opens detailed card component on click', () => {
    const toggleDetails = vi.fn();
    const { getByTestId } = render(
      <Card product={mockProduct} toggleDetails={toggleDetails} />
    );
    const cardElement = getByTestId('cardTest');
    fireEvent.click(cardElement);
    expect(toggleDetails).toHaveBeenCalledWith(1);
  });
});
