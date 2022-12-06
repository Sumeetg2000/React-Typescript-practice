import { createSlice } from "@reduxjs/toolkit";

interface cardState {
  hover: boolean;
  cardData?: userData | null;
}

export interface userData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

const initialState: cardState = {
  hover: false,
  cardData: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    SHOW_CARD: (state, { payload }) => {
      state.hover = true;
      state.cardData = payload;
    },
    HIDE_CARD: (state) => {
      state.hover = false;
      state.cardData = null;
    },
  },
});

export const { SHOW_CARD, HIDE_CARD } = cardSlice.actions;
export default cardSlice.reducer;
