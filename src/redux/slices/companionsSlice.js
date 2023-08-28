import { createSlice } from '@reduxjs/toolkit';
import { users } from '../../mocks/data';

const initialState = {
  users: users,
  accordion: [true, false, false, false],
  activeCompanion: null,
  isSearchActive: true
};

const companionsSlice = createSlice({
  name: 'companions',
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
        if (action.payload.messageType === 'defaultText') {
          state.activeCompanion.messages.unshift({
            text: action.payload.text,
            sender: 'Me',
            type: 'text',
            time: new Date().toLocaleTimeString().slice(0, 5),
            date: new Date().toLocaleDateString()
          });
        }
      }
    }
  }
});

export const { toggleAccordion, selectUser, toggleSearch, addMessage } =
  companionsSlice.actions;

export default companionsSlice.reducer;
