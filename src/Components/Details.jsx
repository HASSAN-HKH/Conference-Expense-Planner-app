import React, { act } from "react";
import { createSlice } from "@reduxjs/toolkit";

const DetailsSlice = createSlice({
  name: "Details",
  initialState: {
    items: [],
  },
  reducers: {
    increaseQuantity: (state, action) => {
      const isExisted = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (isExisted) {
        isExisted.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const isExisted = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (isExisted) {
        if (isExisted.quantity - 1 === 0) {
          isExisted.quantity -= 1;
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          isExisted.quantity -= 1;
        }
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = DetailsSlice.actions;

export default DetailsSlice.reducer;
