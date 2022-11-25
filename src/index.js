// index.js
// html로 랜더링

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 엄격 모드 >> ul 영향 x */}
    <App />
  </React.StrictMode>
);