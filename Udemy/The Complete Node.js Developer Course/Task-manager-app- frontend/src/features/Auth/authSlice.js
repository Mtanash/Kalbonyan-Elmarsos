import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/authApi";

const initialState = {
  authData: {},
  status: "idle",
  error: null,
};

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (userData) => {
    try {
      const response = await api.createUser(userData);
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (userData) => {
    try {
      const response = await api.loginUser(userData);
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

export const logOutUser = createAsyncThunk("auth/logOutUser", async () => {
  try {
    const response = await api.logoutUser();
    return response.data;
  } catch (e) {
    return e.response.data;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.authData = action.payload;
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        state.status = "idle";
        state.error = null;
      })
      .addCase(signUpUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.authData = action.payload;
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        state.status = "idle";
        state.error = null;
      })
      .addCase(signInUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.authData = {};
        localStorage.clear();
        state.status = "idle";
        state.error = null;
      })
      .addCase(logOutUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      });
  },
});

export const selectAuthData = (state) => state.auth.authData;

export default authSlice.reducer;
