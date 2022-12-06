import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  userName?: string;
  userEmail?: string;
  userPhoneNo?: string;
  userPassword?: string;
  userImage?: string | Blob;
  isLoggedIn: boolean;
}

const initialState: userState  =
  localStorage.getItem("loggedIn") === "true"
    ? {
        userName: localStorage.getItem("name"),
        userEmail: localStorage.getItem("email"),
        userPhoneNo: localStorage.getItem("phoneNo"),
        userPassword: localStorage.getItem("password"),
        userImage: localStorage.getItem("image"),
        isLoggedIn: true,
      }
    : { isLoggedIn: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LOGIN: (state, { payload }) => {

      return (state = { ...payload, isLoggedIn: true });
    },
    LOGOUT: (state) => {
      return (state = { isLoggedIn: false });
    },
  },
});

export const { LOGIN, LOGOUT } = userSlice.actions;
export default userSlice.reducer;
