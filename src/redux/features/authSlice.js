
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAdmin: false,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAdmin = action.payload?.role === 'admin';
      state.loading = false;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAdmin = false;
      state.error = null;
    }
  }
});

export const { setLoading, setError, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
