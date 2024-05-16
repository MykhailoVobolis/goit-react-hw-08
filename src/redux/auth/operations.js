import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// Регістрація нового користувача
export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
  try {
    const response = await axios.post("/users/signup", newUser);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Логін користувача
export const logIn = createAsyncThunk("auth/login", async () => {});

// Вихід користувача
export const logOut = createAsyncThunk("auth/logout", async () => {});
