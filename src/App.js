// App.js

import React from 'react';
import './App.css'; // 기본 css
import { Reset } from 'styled-reset'; // 리셋 css
import Header from './components/Header/Header'; // 헤더
import Main from './components/Main/Main'; // 메인 페이지
import Protein from './components/Protein/Protein'; // 프로틴 서브 페이지
import Boosters from './components/Boosters/Boosters'; // 부스터 서브 페이지
import Vitamins from './components/Vitamins/Vitamins'; // 비타민 서브 페이지
import Event from './components/Event/Event'; // 이벤트 서브 페이지
import SignUp from './components/SignUp/SignUp'; // 회원 가입 팝업 페이지
import Footer from './components/Footer/Footer'; // 푸터 페이지

import { Routes, Route } from 'react-router-dom'; // 페이지 이동을 위한 리액트 라우터



function App() {

  return (

    <div className="App">
    <Reset />
      <Header />
        <Routes>
          <Route exact path='/myprotein' element={<Main />}/>
          <Route exact path='/protein' element={<Protein />}/>
          <Route exact path='/boosters' element={<Boosters />}/>
          <Route exact path='/vitamins' element={<Vitamins />}/>
          <Route exact path='/event' element={<Event />}/>
          <Route exact path='/signUp' element={<SignUp />}/>
        </Routes>
      <Footer />
    </div>

  )

};

export default App;