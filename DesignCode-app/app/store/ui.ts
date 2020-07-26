import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isLoginVisible: false, isMenuVisible: false, isProjectCardOpen: false },
  reducers: {
    closeLoginModal: (ui) => {
      ui.isLoginVisible = false;
    },
    openLoginModal: (ui) => {
      ui.isLoginVisible = true;
    },
    closeMenu: (ui) => {
      ui.isMenuVisible = false;
    },
    openMenu: (ui) => {
      ui.isMenuVisible = true;
    },
    closeProjectCard: (ui) => {
      ui.isProjectCardOpen = false;
    },
    openProjectCard: (ui) => {
      ui.isProjectCardOpen = true;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
