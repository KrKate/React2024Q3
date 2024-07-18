import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: { currentPage: 1, totalPages: 3 },
  reducers: {
    setCurrentPage: (state, action) => {
      return {
        ...state,
        currentPages: action.payload,
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
