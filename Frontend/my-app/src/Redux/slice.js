import { createSlice } from '@reduxjs/toolkit';

export const loginUserAsync = (loginData) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const data = await response.json();
      const jwtToken = data.body.token;
       sessionStorage.setItem("token", jwtToken)

      dispatch(setName(loginData.email));
    } else {
      console.error("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'John',
    isEditing: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    startEditing: (state) => {
      state.isEditing = true;
    },
    stopEditing: (state) => {
      state.isEditing = false;
    },
  },
});

export const { startEditing, setName, stopEditing } = userSlice.actions;

export default userSlice.reducer;
