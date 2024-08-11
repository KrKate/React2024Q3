import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, Store } from '@reduxjs/toolkit/react';
import { vi } from 'vitest';
import { useRouter, useSearchParams } from 'next/navigation';
import Home from '../app/home/page';
import { rootReducer } from '../redux/reducers';
import { RootState } from '../redux/store';
import { Product } from '../models';
import { ThemeProvider } from '../context/context';

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

interface RenderWithReduxOptions {
  initialState?: Partial<RootState>;
  store?: Store;
}

const renderWithReduxAndTheme = (
  component: React.ReactNode,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
  }: RenderWithReduxOptions = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider>{component}</ThemeProvider>
      </Provider>
    ),
    store,
  };
};

const products: Product[] = [
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

describe('HomePage Component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: vi.fn(),
    });
    (useSearchParams as jest.Mock).mockReturnValue({
      get: vi.fn().mockReturnValue(''),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const initialState: Partial<RootState> = {
    homePage: {
      limit: 10,
      selectedId: null,
      isDetailsOpen: false,
    },
    choose: {
      chosenProducts: [],
    },
  };

  it('renders correctly with products', () => {
    const { getByText } = renderWithReduxAndTheme(
      <Home products={products} currentPage={1} />,
      {
        initialState,
      }
    );

    expect(getByText('First')).toBeInTheDocument();
    expect(getByText('Second')).toBeInTheDocument();
  });
});
