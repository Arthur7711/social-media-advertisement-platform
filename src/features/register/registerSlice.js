import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  email: "",
  password: "",
  country: 0,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    fullname: (state, action) => {
      state.fullname = action.payload;
    },
    email: (state, action) => {
      state.email = action.payload;
    },
    password: (state, action) => {
      state.password = action.payload;
    },
    country: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const { fullname, email, password, country } = registerSlice.actions;

export default registerSlice.reducer;
