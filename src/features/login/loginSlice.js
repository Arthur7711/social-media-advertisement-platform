import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/API";

export const initialState = {
  email: "",
  password: "",
  answer: "",
};

export const fetchUserById = createAsyncThunk(
  "login/fetchByIdStatus",
  async (userstate) => {
    const response = await API.post("/auth", {
      email: userstate?.email,
      password: userstate?.password,
    })
      .then(function (response) {
        console.log(response.status);
        return (initialState.answer = response.status);
      })
      .catch(function (error) {
        console.log(error.response.status);
        answer(error.response.status);
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
    answer: (state, action) => {
      state.answer = action.payload;
    },
  },
});

export const { email, password, answer } = loginSlice.actions;

export default loginSlice.reducer;
