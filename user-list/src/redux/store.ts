import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./reducers/apiSlice";
import userReducer from "./reducers/userSlice";
import cardReducer from "./reducers/cardSlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
    user: userReducer,
    card: cardReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
