import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Alex",
    phone: "+79423424144",
  },
};

const messengerSlice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    changeName: (store, action) => {
      store.user.name = action.payload;
    },
  },
});

export const { changeName } = messengerSlice.actions;

export default messengerSlice.reducer;
