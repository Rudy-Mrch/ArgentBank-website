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
      sessionStorage.setItem("token", jwtToken);

      dispatch(setToken(jwtToken));
    } else {
      console.error("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
