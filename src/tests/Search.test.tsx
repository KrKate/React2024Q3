import { render, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { vi } from 'vitest';
import { useRouter } from 'next/router';
import Search from '../pages/components/Search/Search';
import { setSearchValue } from '../redux/store/searchSlice';
import { setCurrentPage } from '../redux/store/paginationSlice';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Search', () => {
  const mockStore = configureStore({
    reducer: {
      search: vi.fn(() => ({
        searchValue: '',
        searchTotal: 0,
      })),
      pagination: vi.fn(() => ({
        currentPage: 1,
      })),
    },
  });

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

  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={mockStore}>
        <Search />
      </Provider>
    );

    expect(getByPlaceholderText('Enter product')).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    const { getByPlaceholderText } = render(
      <Provider store={mockStore}>
        <Search />
      </Provider>
    );

    const input = getByPlaceholderText('Enter product') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'apple' } });
    expect(input.value).toBe('apple');
  });

  it('dispatches setSearchValue and setCurrentPage actions when clicking search button', () => {
    const mockDispatch = vi.fn();
    mockStore.dispatch = mockDispatch;

    const { getByPlaceholderText, getByText } = render(
      <Provider store={mockStore}>
        <Search />
      </Provider>
    );

    const input = getByPlaceholderText('Enter product') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'silver' } });
    fireEvent.click(getByText('Search'));
    expect(mockDispatch).toHaveBeenCalledWith(setSearchValue('silver'));
    expect(mockDispatch).toHaveBeenCalledWith(setCurrentPage(1));
  });
});
