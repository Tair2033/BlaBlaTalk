import { configureStore } from "@reduxjs/toolkit";
import messengerReducer from "../slices/messengerSlice";
import userReducer from "../slices/userSlice";
import companionsReducer from "../slices/companionsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    messenger: messengerReducer,
    companions: companionsReducer,
  },
});
