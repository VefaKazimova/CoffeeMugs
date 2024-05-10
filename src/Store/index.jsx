import { configureStore } from "@reduxjs/toolkit";
import addReducer from "../Slice";
export const store = configureStore({
  reducer: addReducer,
});
