import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: 'John', 
    isEditing: false,
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload; 
    },
    startEditing: (state) => {
      state.isEditing = true;
    },
    stopEditing: (state) => {
      state.isEditing = false;
    },
  },
});

export const { startEditing, setUserName, stopEditing } = userSlice.actions;
export default userSlice.reducer;
