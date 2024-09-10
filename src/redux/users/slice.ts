import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./operations";
import { StateType } from "../../types";

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

const handlePending = (state: StateType) => {
  state.isLoading = true;
};

const handleRejected = (state: StateType, action: PayloadAction<string>) => {
  console.log("action", action);
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilters: {
      reducer(state, action) {
        const { key, value } = action.payload;

        function saveValue(key: string, value: string): void {
          state.filters[key] = value;
        }

        // console.log("action", action.payload);

        switch (key) {
          case "name":
            saveValue(key, value);
            return;
          case "username":
            saveValue(key, value);
            return;
          case "email":
            saveValue(key, value);
            return;
          case "phone":
            saveValue(key, value);
            return;
          case "reset":
            state.filters = initialState.filters;
            return;
        }
      },
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
