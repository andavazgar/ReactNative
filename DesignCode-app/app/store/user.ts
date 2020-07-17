import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    updateUser: (user, action) => {
      user = { ...user, ...action.payload };
      return user;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
