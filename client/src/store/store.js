import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../slices/counterSlice.js";
import actionReducer from "../slices/actionSlice.js";

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    actionChoice: actionReducer,
  },
});

export default store;
