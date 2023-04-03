import React from 'react';
import ReactDOM from 'react-dom/client';
// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports

import App from './App';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
