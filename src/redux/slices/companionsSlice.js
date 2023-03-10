import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      type: "Unread",
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
              text: "Hesdfs sdfsd sfddddddddddddddddddddddddddddddddsdfsdferfewrgfebdfvdfgdfgdfgdfgdfgedassvdcvxcvxcvxcvxcvxcvxcvxcvxcvxcvcbedfgdsfgefgerfedvdfbertgefbfgbfgbfbrtfvfgbrtbfbrtgetgrtbrbfgvb",
              sender: "Me",
              type: "text",
              time: "13:40",
              date: "07.03.2023",
            },
            {
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hello_%28yellow%29.svg/2560px-Hello_%28yellow%29.svg.png",
              sender: "Companion",
              type: "image",
              time: "13:40",
              date: "07.03.2023",
            },
            {
              image:
                "https://supersimple.com/wp-content/uploads/SONGS_Thumbnail_Hello-Puppets_1080x740.jpg",
              text: "Hello",
              sender: "Me",
              type: "image",
              time: "13:40",
              date: "07.03.2023",
            },
            {
              text: "Hello, Dear friend!",
              sender: "Me",
              type: "text",
              time: "13:40",
              date: "07.03.2023",
            },
            {
              text: "Hello, Dear friend!",
              sender: "Companion",
              type: "text",
              time: "13:40",
              date: "07.03.2023",
            },
            {
              text: "Hello, Dear friend!",
              sender: "Companion",
              type: "text",
              time: "13:40",
              date: "07.03.2023",
            },
            {
              text: "Hello, Dear friend!",
              sender: "Companion",
              type: "text",
              time: "13:40",
              date: "07.03.2023",
            },
            {
              text: "Hello, Dear friend!",
              sender: "Companion",
              type: "text",
              time: "13:40",
              date: "07.03.2023",
            },
          ],
        },
        {
          unread: 1,
          isOnline: false,
          icon: null,
          name: "Vika",
          surename: "Jhonson",
          phoneNumber: "+84564547543",
          messages: [
            {
              text: "Ok",
              sender: "Companion",
              type: "text",
              time: "02:34",
              date: "03.03.2023",
            },
          ],
        },
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
              time: "13:40",
              date: "07.03.2023",
            },
          ],
        },
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
              time: "13:40",
              date: "07.03.2023",
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
              time: "13:40",
              date: "07.03.2023",
            },
          ],
        },
        {
          unread: 1,
          isOnline: false,
          icon: null,
          name: "Vika",
          surename: "Jhonson",
          phoneNumber: "+84564547543",
          messages: [
            {
              text: "Ok",
              sender: "Companion",
              type: "text",
              time: "02:34",
              date: "03.03.2023",
            },
          ],
        },
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
              time: "13:40",
              date: "07.03.2023",
            },
          ],
        },
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
              time: "13:40",
              date: "07.03.2023",
            },
          ],
        },
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
              time: "13:40",
              date: "07.03.2023",
            },
          ],
        },
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
              time: "13:40",
              date: "07.03.2023",
            },
          ],
        },
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
              time: "13:40",
              date: "07.03.2023",
            },
          ],
        },
      ],
    },
  ],
  accordion: [true, false, false, false],
  activeCompanion: null,
  isSearchActive: true,
};

const companionsSlice = createSlice({
  name: "companions",
  initialState,
  reducers: {
    toggleAccordion: (state, action) => {
      for (let i = 0; i < state.accordion.length; i++) {
        if (i !== action.payload) {
          state.accordion[i] = false;
        }
      }
      state.accordion[action.payload] = !state.accordion[action.payload];
    },
    selectUser: (state, action) => {
      state.activeCompanion = action.payload;
    },
    toggleSearch: (state) => {
      state.isSearchActive = !state.isSearchActive;
    },
    addMessage: (state, action) => {
      if (state.activeCompanion) {
        if (action.payload.messageType === "defaultText") {
          state.activeCompanion.messages.unshift({
            text: action.payload.text,
            sender: "Me",
            type: "text",
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
          });
        }
      }
    },
  },
});

export const { toggleAccordion, selectUser, toggleSearch, addMessage } =
  companionsSlice.actions;

export default companionsSlice.reducer;
