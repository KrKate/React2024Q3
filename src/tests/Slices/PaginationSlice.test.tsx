import { configureStore, Store } from '@reduxjs/toolkit';
import paginationReducer, {
  setCurrentPage,
  setTotalPages,
} from '../../redux/store/paginationSlice';

describe('PaginationSlice', () => {
  let store: Store;

  beforeEach(() => {
    store = configureStore({
      reducer: paginationReducer,
    });
  });

  it('should return initial state', () => {
    expect(store.getState()).toEqual({
      currentPage: 1,
      totalPages: 1,
    });
  });

  it('should set current page', () => {
    store.dispatch(setCurrentPage(3));
    expect(store.getState().currentPage).toBe(3);
  });

  it('should set total pages', () => {
    store.dispatch(setTotalPages(5));
    expect(store.getState().totalPages).toBe(5);
  });
});
