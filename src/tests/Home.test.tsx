import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, Store } from '@reduxjs/toolkit/react';
import { vi } from 'vitest';
import { useRouter } from 'next/router';
import HomePage from '../pages';
import { rootReducer } from '../redux/reducers';
import { RootState } from '../redux/store';
import { Product } from '../models';
import { ThemeProvider } from '../context/context';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
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
      <HomePage products={products} currentPage={1} total={20} />,
      {
        initialState,
      }
    );

    expect(getByText('First')).toBeInTheDocument();
    expect(getByText('Second')).toBeInTheDocument();
  });
});
