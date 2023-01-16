import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const dom = document.getElementById('root')
const root = ReactDOM.createRoot(dom);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
