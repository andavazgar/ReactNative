import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  photo: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: {} as User,
  reducers: {
    updateUser: (user, action) => {
      user = { ...user, ...action.payload };
      return user;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
