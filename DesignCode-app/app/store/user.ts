import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  photo: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    updateUser: (user, action) => {
      user = Object.keys(action.payload).length > 0 ? { ...user, ...action.payload } : {};
      return user;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
