import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "../constants/constants";

interface DataState {
  data: UserInfo[];
}

const initialState: DataState = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<UserInfo>) => {
      state.data.push(action.payload);
    },
  },
});

export const { updateData } = dataSlice.actions;
export const dataSliceReducer = dataSlice.reducer;
