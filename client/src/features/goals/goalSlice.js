import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";

// let goal = JSON.parse(localStorage.getItem("goal"));

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// redux actions
export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
