import { createSlice } from '@reduxjs/toolkit';

const homePageSlice = createSlice({
  name: 'homePage',
  initialState: {
    total: 194,
    products: [],
    isLoading: true,
    limit: 10,
    currentPage: 1,
    totalPages: 0,
    isDetailsOpen: false,
    selectedId: null,
  },
  reducers: {
    setTotal: (state, action) => {
      return {
        ...state,
        total: state.total + action.payload,
      };
    },
    setProducts: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
    setIsLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    setLimit: (state, action) => {
      return {
        ...state,
        limit: action.payload,
      };
    },
    setCurrentPage: (state, action) => {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    setTotalPages: (state, action) => {
      return {
        ...state,
        totalPages: action.payload,
      };
    },
    setIsDetailsOpen: (state, action) => {
      return {
        ...state,
        isDetailsOpen: action.payload,
      };
    },
    setSelectedId: (state, action) => {
      return {
        ...state,
        selectedId: action.payload,
      };
    },
  },
});

export const {
  setTotal,
  setProducts,
  setIsLoading,
  setLimit,
  setCurrentPage,
  setTotalPages,
  setIsDetailsOpen,
  setSelectedId,
} = homePageSlice.actions;

export default homePageSlice.reducer;
