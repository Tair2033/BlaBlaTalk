import { configureStore } from "@reduxjs/toolkit";
import messengerReducer from "../slices/messengerSlice";

export const store = configureStore({
  reducer: {
    messenger: messengerReducer,
  },
});
