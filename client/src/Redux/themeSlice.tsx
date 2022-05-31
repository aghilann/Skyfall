import { AppDispatch, RootState } from './store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { MantineThemeBase } from '@mantine/core';
import { themeObject } from '../Data/theme-object';

const initialState: MantineThemeBase = themeObject; // Initial state

export const themeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleDarkMode: (state: MantineThemeBase) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.colorScheme = state.colorScheme !== 'light' ? 'light' : 'dark';
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
