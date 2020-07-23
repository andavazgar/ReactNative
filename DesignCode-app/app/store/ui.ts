import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isMenuVisible: false, isProjectCardOpen: false },
  reducers: {
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
