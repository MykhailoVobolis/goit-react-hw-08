import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state) => {
  state.loading = false;
};

// Стан даних про користувача
const authSlise = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefrreshing: false,
  },
  extraReducers: (builder) => {
    builder
      // Обробка операції регістрації користувача
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)
      // Обробка операції логіну користувача
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)
      // Обробка операції логауту (вихода користувача з облікового запису App)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.user = {
          name: null,
          email: null,
        };
        (state.token = null), state.isLoggedIn;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)
      // Обробка операції рефрешу користувача
      .addCase(refreshUser.pending, (state) => {
        state.isRefrreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
        state.isRefrreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefrreshing = false;
      });
  },
});
export const authReduser = authSlise.reducer;
