import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.loading = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    initializeAuth(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user || null;
      state.loading = false;
    },
  },
});

export const { login, logout, setLoading, initializeAuth } = authSlice.actions;
export default authSlice.reducer;
