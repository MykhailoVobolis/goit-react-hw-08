import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";
axios.defaults.baseURL = "https://connections-api.goit.global";

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
    // Додавання хедерів з токіном до всіх наступних будь яких типів запитів (common)
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
    // Додавання хедерів з токіном до всіх наступних будь яких типів запитів (common)
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

// Рефреш користувача.
// Збереження данних користувача при перезавантаженні App
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Читання токіна з Local Storage
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;
    // Додавання хедерів з токіном до всіх наступних будь яких типів запитів (common)
    setAuthHeader(savedToken);

    const response = await axios.get("/users/current");
    return response.data;
  },
  {
    condition(_, thunkAPI) {
      // Перевіряємо, чи є збережений в Local Storage токін.
      // Якщо так, виконується логін за токіном
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);
