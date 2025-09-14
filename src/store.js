import { configureStore } from "@reduxjs/toolkit";
import DetailsReducer from "./Components/Details";
import MealsReducer from "./Components/MealsSlice";

const store = configureStore({
  reducer: {
    Details: DetailsReducer,
    Meals: MealsReducer,
  },
});

export default store;
