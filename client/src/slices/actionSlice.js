import { createSlice } from "@reduxjs/toolkit";

const actionSlice = createSlice({
  name: "action",
  initialState: {
    value: "Log In",
  },
  reducers: {
    setAction(state, action) {
      state.action = action.payload;
    },
  },
});

export const { setAction } = actionSlice.actions;

export const selectAction = (state) => state.actionChoice.action;

export default actionSlice.reducer;
