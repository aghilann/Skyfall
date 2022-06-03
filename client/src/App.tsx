import { Auth, Home, Landing, NotFound404 } from './Pages/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, MantineProvider } from '@mantine/core';

import React from 'react';
import { RootState } from '././Redux/store';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Container className="App" fluid>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </MantineProvider>
  );
}

export default App;
