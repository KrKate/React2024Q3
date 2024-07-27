import './index.css';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import router from './router';
import store from './redux/store/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} data-testid="router-provider" />
    </Provider>
  </React.StrictMode>
);
