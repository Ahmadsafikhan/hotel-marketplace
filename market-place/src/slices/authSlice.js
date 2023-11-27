import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { name: "Ahmad", role: "seller" },
  reducers: {
    loggedInUser: (state, action) => {
        console.log(action.payload)
      return { ...state, ...action.payload };
    },
    logout: () => {
      return { name: "", role: "" };
    },
  },
});
export const { loggedInUser, logout } = authSlice.actions;
export default authSlice.reducer;
