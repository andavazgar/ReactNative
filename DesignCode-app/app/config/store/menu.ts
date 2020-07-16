import { Action } from "redux";

// Action types
const CLOSE_MENU = "CLOSE_MENU";
const OPEN_MENU = "OPEN_MENU";

// Action creators
export const closeMenu = () => ({
  type: CLOSE_MENU,
});

export const openMenu = () => ({
  type: OPEN_MENU,
});

// Reducer
const reducer = (store = { isMenuVisible: false }, action: Action<string>) => {
  switch (action.type) {
    case CLOSE_MENU:
      return { ...store, isMenuVisible: false };

    case OPEN_MENU:
      return { ...store, isMenuVisible: true };

    default:
      return store;
  }
};

export default reducer;
