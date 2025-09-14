import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const MealsSlice = createSlice({
  name: "Meals",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const isExisted = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!isExisted) {
        state.items.push({ ...action.payload });
      } else {
        isExisted.quantity = action.payload.quantity;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, deleteItem } = MealsSlice.actions;

export default MealsSlice.reducer;
