import { AppDispatch, RootState } from './store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { MantineThemeBase } from '@mantine/core';
import { themeObject } from '../Data/theme-object';

interface UserType {
  id: String;
  first_name: String;
  middle_name: String | null;
  last_name: String;
  email: String;
  password?: String;
  date_created: String;
}

type UserInterface = UserType | null;

const initialState: UserInterface = null; // Initial state

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInUser: (state: UserInterface, action: PayloadAction<any>) => {
      return action.payload;
    },
    signOutUser: (state: UserInterface) => null,
  },
});

// Action creators are generated for each case reducer function
export const { signInUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;
