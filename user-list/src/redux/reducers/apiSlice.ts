import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  API_PATH: `https://reqres.in/api/users?page=1`,
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    CHANGE_PAGE: (state) => {
      if (state.page === 1) {
        state.API_PATH = state.API_PATH.split("1").join("2");
        state.page = 2;
      } else {
        state.API_PATH = state.API_PATH.split("2").join("1");
        state.page = 1;
      }
    },
  },
});

export const { CHANGE_PAGE } = apiSlice.actions;

export default apiSlice.reducer;
