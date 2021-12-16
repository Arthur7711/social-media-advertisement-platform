import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  email: "",
  image: null,
  oldPassword: "",
  newPassword: "",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    fullname: (state, action) => {
      state.fullname = action.payload;
    },
    email: (state, action) => {
      state.email = action.payload;
    },
    image: (state, action) => {
      state.image = action.payload;
    },
    oldPassword: (state, action) => {
      state.oldPassword = action.payload;
    },
    newPassword: (state, action) => {
      state.newPassword = action.payload;
    },
  },
});

export const { fullname, email, image, oldPassword, newPassword } =
  generalSlice.actions;

export default generalSlice.reducer;
