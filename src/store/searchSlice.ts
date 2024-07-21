import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
    searchTotal: 0,
  },
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
