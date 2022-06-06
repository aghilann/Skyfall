import { QueryClient, QueryClientProvider } from 'react-query';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { apiSlice } from './API/apiSlice';
import { store } from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
