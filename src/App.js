// App.js

import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import Loading from './Loading'; // 로딩화면




function App() {

  const [loading, setLoading] = useState(false);
  
  async function fetchUsers() {

      setLoading(true);
      await axios.get('https://seo-dong-hyun.github.io/myprotein')
                 .then( ()=> {
                  setTimeout(setLoading, 600, false);
                  console.log('loading 유즈이펙트 실행');
                 })
                 .catch(console.error)
  }

    useEffect( () => {
      fetchUsers();
    },[]);


    

// 1번
  // const [users, setUsers] = useState(null);
  // const [loading, setLoading] = useState(false);

  // const fetchUsers = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(
  //       'http://localhost:3000/myprotein'
  //     );
  //     setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   setTimeout(setLoading, 800, false);
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, [users]);





//   // 2방법
//   const [loading, setLoading] = useState(null);

//   const httpInstance = axios.create({
//     baseURL: 'http://localhost:3000/myprotein',
//     timeout: 30000,
//     headers: {
//       'content-type': 'application/json; charset=UTF-8',
//     },
//     withCredentials: true,
//   });
//   // 헤더에 인증 추가
//   // httpInstance.defaults.headers.common.Authorization = `JWT TOKEN AUTHORIZATION`;
  
//   useEffect(() => {
//     const goload = async() => {
//       try {
//         setLoading(true);
        
//         await httpInstance.post(
//           'http://localhost:3000/myprotein',
//         ).then((response) => {
//          console.log(response);
//         })
//       } catch (e) {
//        console.log(e)
//       }

//       setTimeout( () => {
//         setLoading(false);
//       },800)
      
//       // setTimeout(setLoading, 800, false);
//     }
    
// goload();
//   }, []);
  



return loading ? <Loading /> : (
   // loading 이 트루면 로딩 컴포넌트 실행 false 시 아래 값 호출
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