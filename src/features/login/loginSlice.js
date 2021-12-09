import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

const initialState = {
  email: "",
  password: "",  
};

export const fetchUserById = createAsyncThunk(
  "login/fetchByIdStatus",
  async (userstate) => {
    const response = await API.post("/auth", {
      email: userstate?.email,
      password: userstate?.password,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    email: (state, action) => {
      state.email = action.payload;
    },
    password: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { email, password } = loginSlice.actions;

export default loginSlice.reducer;
