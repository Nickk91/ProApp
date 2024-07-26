import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import userIdReducer from "../slices/userIdSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userId: userIdReducer,
  },
});

export default store;
