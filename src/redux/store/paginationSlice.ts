import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  totalPages: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
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
  },
});

export const { setCurrentPage, setTotalPages } = paginationSlice.actions;

export default paginationSlice.reducer;
