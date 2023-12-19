import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'John',
    isEditing: false,
  },
  reducers: {
    startEditing: (state) => {
      state.isEditing = true;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    stopEditing: (state) => {
      state.isEditing = false;
    },
  },
});

export const { startEditing, setName, stopEditing } = userSlice.actions;
export default userSlice.reducer;
