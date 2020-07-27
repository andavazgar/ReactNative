import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  photo: string;
  email?: string;
  position?: string;
}

const INITIAL_STATE: User = {
  name: "Stranger",
  photo: "https://cl.ly/55da82beb939/download/avatar-default.jpg",
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    updateUser: (user, action) => {
      user =
        Object.keys(action.payload).length > 0 ? { ...user, ...action.payload } : INITIAL_STATE;
      return user;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
