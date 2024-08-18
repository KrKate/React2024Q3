import { createSlice } from "@reduxjs/toolkit";
import { countries } from "../constants/countries";

export type CountriesSliceState = Array<string>;

const countriesSlice = createSlice({
  name: "countries",
  initialState: countries,
  reducers: {},
});

export const countriesSliceReducer = countriesSlice.reducer;
