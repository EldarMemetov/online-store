import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://6637b7c3288fedf69381246f.mockapi.io/";
export const fetchTasks = createAsyncThunk(
  "book/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/book");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
