import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { useRouter } from 'next/navigation';
import DetailsPage from '../components/Details/Details';

const mockStore = configureMockStore();

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 100,
  description: 'This is a test product.',
  images: `/test-image`,
};

describe('DetailsPage Component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: vi.fn(),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render product details', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <DetailsPage product={mockProduct} />
      </Provider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('100 $')).toBeInTheDocument();
    expect(screen.getByText('This is a test product.')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Test Product' })
    ).toBeInTheDocument();
  });

  it('should show loader when product is null', () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <DetailsPage product={null} />
      </Provider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
