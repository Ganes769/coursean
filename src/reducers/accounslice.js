import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: "",
  password: "",
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    updateName(state = initialState, action) {
      state.username = action.payload;
    },
    updatePassword(state = initialState, action) {
      state.password = action.payload;
    },
  },
});

export const { updateName, updatePassword } = accountSlice.actions;
export default accountSlice.reducer;
