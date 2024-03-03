import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Add the api middleware to the store
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
