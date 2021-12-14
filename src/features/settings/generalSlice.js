import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userFirst: "",
  emailFirst: "",
  userSec: "",
  emailSec: "",
  confirmEmailSec: "",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    userFirst: (state, action) => {
      state.userFirst = action.payload;
    },
    emailFirst: (state, action) => {
      state.emailFirst = action.payload;
    },
    userSec: (state, action) => {
      state.userSec = action.payload;
    },
    emailSec: (state, action) => {
      state.emailSec = action.payload;
    },
    confirmEmailSec: (state, action) => {
      state.confirmEmailSec = action.payload;
    },
  },
});

export const { userFirst, emailFirst, userSec, emailSec, confirmEmailSec } =
  generalSlice.actions;

export default generalSlice.reducer;