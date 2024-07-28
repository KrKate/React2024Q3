import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductInfo {
  id: number;
  title: string;
  price: number;
  description: string;
}

export interface ChooseState {
  chosenProducts: ProductInfo[];
}

export const initialState: ChooseState = {
  chosenProducts: [],
};

const chooseSlice = createSlice({
  name: 'choose',
  initialState,
  reducers: {
    toggleProduct: (state, action: PayloadAction<ProductInfo>) => {
      const product = action.payload;
      const index = state.chosenProducts.findIndex(
        (item) => item.id === product.id
      );
      if (index !== -1) {
        state.chosenProducts.splice(index, 1);
      } else {
        state.chosenProducts.push(product);
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
