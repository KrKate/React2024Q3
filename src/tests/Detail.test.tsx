import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { NextRouter, useRouter } from 'next/router';
import DetailsPage, { getServerSideProps } from '../components/details/[id]';

const mockStore = configureMockStore();

vi.mock('next/router', async (importOriginal) => {
  const actual: NextRouter = await importOriginal();
  return {
    ...actual,
    push: vi.fn(),
    useRouter: vi.fn(),
  };
});

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
      route: '/',
      pathname: '',
      query: '',
      asPath: '/',
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

describe('getServerSideProps', () => {
  it('should fetch product data successfully', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(mockProduct),
    });

    const context = { params: { id: '1' } };
    const result = await getServerSideProps(context);

    expect(result).toEqual({
      props: { product: mockProduct },
    });
  });

  it('should return notFound when fetch fails', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false });
    const context = { params: { id: '1' } };
    const result = await getServerSideProps(context);

    expect(result).toEqual({ notFound: true });
  });
});
