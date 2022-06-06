import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, MantineProvider, Transition } from '@mantine/core';

import { AnimatedRoutes } from './Components/index';
import React from 'react';
import { RootState } from '././Redux/store';
import { useSelector } from 'react-redux';

const App: any = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Container className="App" fluid>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </Container>
    </MantineProvider>
  );
};

export default App;
