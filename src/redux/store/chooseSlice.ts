import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChooseState {
  chosenProducts: number[];
}

const chosenProducts: ChooseState = {
  chosenProducts: [],
};

const chooseSlice = createSlice({
  name: 'choose',
  initialState: chosenProducts,
  reducers: {
    toggleProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const index = state.chosenProducts.indexOf(productId);
      if (index !== -1) {
        state.chosenProducts.splice(index, 1);
      } else {
        state.chosenProducts.push(productId);
      }
    },
    unselectAllProducts: (state) => {
      return {
        ...state,
        chosenProducts: [],
      };
    },
  },
});

export const { toggleProduct, unselectAllProducts } = chooseSlice.actions;
export default chooseSlice.reducer;
