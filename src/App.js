// App.js


import React from 'react';
import './App.css';
import { Reset } from 'styled-reset'; // 리셋 css
import FullPageScroll from './components/FullPageScroll/FullPageScroll'; // 원 페이지 스크롤
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 페이지 이동을 위한 리액트 라우터
import Header from './components/Header/Header'; // 헤더


import Main from './components/Main/Main';
import Section1 from './components/Section1/Section1';
import Page1 from './Page1';
import Page2 from './Page2';



function App() {
  return (
    <>
    <Router>

    <div className="App">
      <Reset />
      {/* 리셋 css */}
      {/* <FullPageScroll /> */}

      {/* 원 페이지 스크롤 */}

      <Routes>
        <Route exact path='/' element={<Header />}/>
      </Routes>
        {/* 헤더 */}


        <Routes>
          <Route exact path='/' element={<FullPageScroll />}/>
        </Routes>
    </div>
    </Router>

    </>



  )

};

export default App;