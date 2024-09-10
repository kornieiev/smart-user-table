import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./operations";
import { FilterKeys, StateType } from "../../types";
import { SerializedError } from "@reduxjs/toolkit";

const initialState: StateType = {
  allUsers: [],
  isLoading: false,
  error: null,
  filters: {
    name: "",
    username: "",
    phone: "",
    email: "",
  },
};

const handlePending = (state: StateType): void => {
  state.isLoading = true;
};

const handleRejected = (
  state: StateType,
  action: PayloadAction<unknown, string, any, SerializedError>
): void => {
  state.isLoading = false;

  if (typeof action.payload === "string") {
    state.error = action.payload;
  } else {
    state.error = action.error.message || null;
  }
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilters(
      state,
      action: PayloadAction<{
        key: FilterKeys;
        value: string;
      }>
    ) {
      const { key, value } = action.payload;
      if (key === "reset") {
        state.filters = initialState.filters;
      } else {
        state.filters[key] = value;
      }
    },
  },
  extraReducers: (builder) => {
    builder

      // fetchAllUsers
      .addCase(fetchAllUsers.pending, handlePending)
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allUsers = action.payload;
      })
      .addCase(fetchAllUsers.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;

export const { setFilters } = usersSlice.actions;
