import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  total: 194,
  products: [],
  product: null,
  isLoading: true,
  limit: 10,
  currentPage: 1,
  totalPages: 0,
  isDetailsOpen: false,
  selectedId: null,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
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
    setProduct: (state, action) => {
      return {
        ...state,
        product: action.payload,
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
  setProduct,
  setIsLoading,
  setLimit,
  setIsDetailsOpen,
  setSelectedId,
} = homePageSlice.actions;

export default homePageSlice.reducer;
