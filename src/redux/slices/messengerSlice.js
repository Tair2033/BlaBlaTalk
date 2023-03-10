import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: true,
  sidebarItems: [
    {
      title: "Pinned",
      icon: "fi fi-rr-star",
      iconActive: "fi fi-sr-star",
      status: false,
    },
    {
      title: "All",
      icon: "fi fi-rr-users-alt",
      iconActive: "fi fi-sr-users-alt",
      status: false,
    },
    {
      title: "Live Chat",
      icon: "fi fi-rr-list-check",
      iconActive: "fi fi-br-list-check",
      status: true,
    },
    {
      title: "Archived",
      icon: "fi fi-rr-bookmark",
      iconActive: "fi fi-sr-bookmark",
      status: false,
    },
    {
      title: "Blocked",
      icon: "fi fi-rr-cross-circle",
      iconActive: "fi fi-sr-cross-circle",
      status: false,
    },
    {
      title: "Trash",
      icon: "fi fi-rr-trash",
      iconActive: "fi fi-sr-trash",
      status: false,
    },
  ],
  messageArea: {
    rows: 37,
  },
};

const messengerSlice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = !state.theme;
    },
    changeSidebarItem: (state, action) => {
      state.sidebarItems.forEach((item) => (item.status = false));
      state.sidebarItems[action.payload].status = true;
    },
    changeRows: (state) => {
      if (state.messageArea.rows > 120) {
        return;
      }
      state.messageArea.rows = state.messageArea.rows + 12;
    },
  },
});

export const { changeTheme, changeSidebarItem, changeRows } =
  messengerSlice.actions;

export default messengerSlice.reducer;
