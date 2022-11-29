// index.js html 로 렌더링

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // 페이지 이동을 위한 라우터

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 리액트 엄격모드 >> ul 에 영향 x */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);