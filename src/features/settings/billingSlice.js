import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  company: "",
  vat: "",
  cardCheck: "",
};

export const billingSlice = createSlice({
  name: "billing",
  initialState,
  reducers: {
    firstName: (state, action) => {
      state.firstName = action.payload;
    },
    lastName: (state, action) => {
      state.lastName = action.payload;
    },
    company: (state, action) => {
      state.company = action.payload;
    },
    vat: (state, action) => {
      state.vat = action.payload;
    },
    cardCheck: (state, action) => {
      state.cardCheck = action.payload;
    },
  },
});

export const { firstName, lastName, company, vat, cardCheck } =
billingSlice.actions;

export default billingSlice.reducer;
