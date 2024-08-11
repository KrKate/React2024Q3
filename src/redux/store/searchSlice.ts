import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  searchValue: '',
  searchTotal: 0,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      return {
        ...state,
        searchValue: action.payload,
      };
    },
    setSearchTotal: (state, action) => {
      return {
        ...state,
        searchTotal: action.payload,
      };
    },
  },
});

export const { setSearchValue, setSearchTotal } = searchSlice.actions;
export default searchSlice.reducer;
