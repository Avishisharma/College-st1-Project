import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'; 

import { CartProvider } from './CartContext'; // Import your CartProvider


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <CartProvider>
    <App /></CartProvider>
  </React.StrictMode>,
  </BrowserRouter>,
  document.getElementById('root')
);


