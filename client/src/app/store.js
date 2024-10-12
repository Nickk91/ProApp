import authReducer from "../features/auth/authSlice";
import { authApi } from "../features/auth/authService";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
});

export default store;
