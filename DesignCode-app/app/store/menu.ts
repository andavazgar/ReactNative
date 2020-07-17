import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { isMenuVisible: false },
  reducers: {
    closeMenu: (menu) => {
      menu.isMenuVisible = false;
    },
    openMenu: (menu) => {
      menu.isMenuVisible = true;
    },
  },
});

export const { closeMenu, openMenu } = menuSlice.actions;
export default menuSlice.reducer;
