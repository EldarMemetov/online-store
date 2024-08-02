// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchProducts = createAsyncThunk(
//   "buy/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get("/buy");
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addProducts = createAsyncThunk(
//   "buy/addBuy",
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.get("/buy", { text });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteProducts = createAsyncThunk(
//   "buy/deleteBuy",
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.get("/buy", { text });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
