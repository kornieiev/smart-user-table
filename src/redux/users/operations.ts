import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../types";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts/1/";

// fetchAllUsers - GET @ /api/keys
export const fetchAllUsers = createAsyncThunk("/users", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/users");
    // console.log("res in operations", res);
    const data: UserType[] = res.data;
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue("Unknown error occurred");
    }
  }
});
