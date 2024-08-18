import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "../constants/constants";

interface DataState {
  data: UserInfo[];
  lastAddedIndex: number | null;
}

const initialState: DataState = {
  data: [],
  lastAddedIndex: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<UserInfo>) => {
      state.data.push(action.payload);
      state.lastAddedIndex = state.data.length - 1;
    },
  },
});

export const { updateData } = dataSlice.actions;
export const dataSliceReducer = dataSlice.reducer;
