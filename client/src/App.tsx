import { Button, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { decrement, increment, incrementByAmount } from './Redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { RootState } from '././Redux/store';
import { themeObject } from './Data/theme-object';
import { toggleDarkMode } from './Redux/themeSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <MantineProvider theme={themeObject} withGlobalStyles withNormalizeCSS>
      <div className="App">
        <Button color="green" onClick={() => dispatch(toggleDarkMode())}>
          Currenly {theme.colorScheme}
        </Button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(5 || 0))}>
          Increment by 5
        </button>
        <h1>{count}</h1>
      </div>
    </MantineProvider>
  );
}

export default App;
