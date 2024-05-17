import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

// Регістрація нового користувача
export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
  try {
    const response = await axios.post("/users/signup", newUser);
    // Додавання хедерів до всіх наступних будь яких типів запитів (common)
    setAuthHeader(response.data.token);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Логін користувача
export const logIn = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", userInfo);
    // Додавання хедерів до всіх наступних будь яких типів запитів (common)
    setAuthHeader(response.data.token);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Вихід користувача
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout");
    // Видалення хедеру при виходу користувача з App
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
