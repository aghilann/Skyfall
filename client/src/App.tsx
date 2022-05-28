import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, MantineProvider } from '@mantine/core';
import { Home, NotFound404 } from './Pages/index';

import React from 'react';
import { RootState } from '././Redux/store';
import { themeObject } from './Data/theme-object';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Container className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </MantineProvider>
  );
}

export default App;
