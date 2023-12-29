import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  tempUserName: '',
  isEditing: false,
  lastName: '',
  firstName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    startEditing: (state) => {
      state.isEditing = true;
      state.tempUserName = state.userName;
    },
    stopEditing: (state) => {
      state.isEditing = false;
      state.tempUserName = '';
    },
  },
});

export const {
  startEditing,
  setUserName,
  setLastName,
  setFirstName,
  stopEditing,
} = userSlice.actions;

export const fetchUserProfileAsync = () => async (dispatch) => {
  try {
    const token = sessionStorage.getItem('token');

    if (!token) {
      console.error('Token not found');
      return;
    }

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      const { userName, lastName, firstName } = data.body;

      dispatch(setUserName(userName));
      dispatch(setLastName(lastName));
      dispatch(setFirstName(firstName));
    } else {
      console.error('Failed to fetch user profile');
    }
  } catch (error) {
    console.error('Error during user profile fetch:', error);
  }
};

export const updateUserProfileAsync = (newUserName) => async (dispatch) => {
  try {
    const token = sessionStorage.getItem('token');

    if (!token) {
      console.error('Token not found');
      return;
    }

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUserName }),
    });

    if (response.ok) {
      dispatch(fetchUserProfileAsync());
    } else {
      console.error('Failed to update user profile');
    }
  } catch (error) {
    console.error('Error during user profile update:', error);
  }
};

export default userSlice.reducer;
