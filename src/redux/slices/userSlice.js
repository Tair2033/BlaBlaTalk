import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "d14jkdsaDFs3daDF",
  name: "Alex",
  phone: "+79423424144",
  isAuth: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkAuth: (state) => {
      const isAuthLocalStorage = localStorage.getItem("isAuth");

      if (typeof isAuthLocalStorage === "undefined") {
        console.log("You aren't signed in!");
        localStorage.setItem("isAuth", false);
      }
    },
    login: (state) => {
      state.isAuth = true;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
