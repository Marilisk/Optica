import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reduxStore from './redux/redux-store';
import { Provider } from 'react-redux';

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
); */


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <Provider store={reduxStore} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);



reportWebVitals();
