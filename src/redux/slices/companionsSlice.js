import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      type: "unread",
      isActive: true,
      companions: [
        {
          unread: 1,
          isOnline: true,
          icon: "/img/companions/user1.jpg",
          name: "John",
          surename: "Tornton",
          phoneNumber: "+87324235323",
          messages: [
            {
              text: "Hello, Dear friend!",
              sender: "Companion",
              type: "text",
            },
          ],
        },
        {
          unread: 0,
          isOnline: false,
          icon: "/img/companions/user2.jpg",
          name: "Vika",
          surename: "Jhonson",
          phoneNumber: "+84564547543",
          messages: [
            {
              text: "Ok",
              sender: "Companion",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      type: "From team",
      companions: [],
    },
    {
      type: "From companies",
      companions: [],
    },
    {
      type: "All Message",
      companions: [],
    },
  ],
};

const companionsSlice = createSlice({
  name: "companions",
  initialState,
  reducers: {},
});

export const {} = companionsSlice.actions;

export default companionsSlice.reducer;
