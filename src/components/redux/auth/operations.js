import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeaders = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      console.log("Sending registration data:", newUser);
      const response = await axios.post("/users/signup", newUser);
      setAuthHeaders(response.data.token);

      return response.data;
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      );
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeaders(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("users/logout");
    setAuthHeaders("");
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response ? error.response.data : error.message
    );
  }
});
