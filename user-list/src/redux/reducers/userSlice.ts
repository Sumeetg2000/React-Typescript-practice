import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./cardSlice";

interface userState {
  loading: boolean;
  user: userData[];
  error: null | string;
}

const initialState: userState = {
  loading: true,
  user: [],
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    FETCHING_USER_SUCCESS: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.error = null;
    },
    FETCHING_USER_FAILURE: (state, { payload }) => {
      state.loading = false;
      state.user = [];
      state.error = payload;
    },
  },
});

export const { FETCHING_USER_FAILURE, FETCHING_USER_SUCCESS } =
  userSlice.actions;
export default userSlice.reducer;
