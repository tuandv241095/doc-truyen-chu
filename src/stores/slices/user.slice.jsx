import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      console.log(payload);
      state.user = JSON.parse(payload);
    },
    removeUser: (state) => {
      state.user = null;
      console.log(state.user);
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUser, removeUser } = actions;

export default reducer;
