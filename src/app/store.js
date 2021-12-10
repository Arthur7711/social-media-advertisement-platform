import { configureStore } from "@reduxjs/toolkit";
import businessesSlice from "../features/businesses/businessesSlice";
import introductionSlice from "../features/introduction/introductionSlice";
import loginReducer from "../features/login/loginSlice";
import registerReducer from "../features/register/registerSlice";
import billingSlice from "../features/settings/billingSlice";
import generalSlice from "../features/settings/generalSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    general: generalSlice,
    billing: billingSlice,
    introduction: introductionSlice,
    businesses:businessesSlice
  },
});
