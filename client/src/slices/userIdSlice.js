import { createSlice } from "@reduxjs/toolkit";

export const userIdSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUserId } = userIdSlice.actions;

export default userIdSlice.reducer;
