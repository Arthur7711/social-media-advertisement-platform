import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { API } from "../../API/API";

const initialState = {
  fullname: "",
  email: "",
  password: "",
  country: "",
};
// export const fetchUserRegister = createAsyncThunk(
//   "register/fetchUserRegister",
//   async (userstate) => {
//     const response = await API.post("/auth", {
//       fullname: userstate?.fullname,
//       email: userstate?.email,
//       password: userstate?.password,
//       country: userstate?.country,
//     })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// );

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
