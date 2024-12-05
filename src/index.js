

import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' for React 18+
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root element for React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
