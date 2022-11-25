//               <li className="gnb-li">
//                 <Link to='/' className='gnb-li-link'>
//                   Home
//                 </Link>
//               </li>

//               <li className="gnb-li">
//                 <Link to='/protein' className='gnb-li-link'>
//                   Protein
//                 </Link>
//               </li>

//               <li className="gnb-li">
//                 <Link to='/boosters' className='gnb-li-link'>
//                   Boosters
//                 </Link>
//               </li>

//               <li className="gnb-li">
//                 <Link to='/vitamins' className='gnb-li-link'>
//                   Vitamins
//                 </Link>
//               </li>

//               <li className="gnb-li">
//                 <Link to='/event' className='gnb-li-link'>
//                   Event
//                 </Link>
//               </li>

//               <li className="gnb-li">
//                 <Link to='/signUp' className='gnb-li-link'>
//                   회원가입
//                 </Link>
//               </li>



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import GnbLi from './GnbLi';  // gnb-li


function Header() {

  // const gnbLi = [
  //   { name: "Home", address: "/"},
  //   { name: "Protein", address: "/protein"},
  //   { name: "Boosters", address: "/boosters"},
  //   { name: "Vitamins", address: "/vitamins"},
  //   { name: "Event", address: "/event"},
  //   { name: "회원가입", address: "/signUp"},
  // ];



  const [click, setClick] = useState(true); // useState 훅을 이용해 click 상태값을 true 로 초기화 setClick를 이용하여 click 상태 변화 주기
  const toggleClick = () => setClick(!click); // 클릭시 클래스 네임 변경




  const [resize, setResize] = useState(true); // header 클래스 네임 변경
  const [innerWidth, setInnerWidth] = useState(window.innerWidth); // innerWidth state 추가
  const resizeRerender = () => { // resizererender 안에서 innerwidth 업데이트 시키기
    setInnerWidth(window.innerWidth); 
  };



  useEffect( () => { // 리사이즈 이벤트 추가

    window.addEventListener('resize', resizeRerender);
    return () => {
      window.removeEventListener('resize', resizeRerender);
    }
  },[]);



  useEffect( () => { // 윈도우 사이즈에 따른 조건문 추가
    if( innerWidth <= 1200 ) { // 윈도우 사이즈 1200 이하시
      setResize(false); // header 클래스 네임 'mo' 로 변경
    } else {
      setResize(true); // 'pc'
    }
  },[innerWidth]);



  return (

    // 헤더

    <>

    <div className="header-wrap">
      <header className={resize ? 'pc' : 'mo'}>
        {/* 클래스 네임 true: pc, false: mo */}
        <div className="logo-wrap">
          <h1>
            <Link to='/' className='logo'></Link>
          </h1>
        </div>

        <nav className="gnb">
          <div className={click ? "gnbBtn" : "gnbBtn active"} onClick={toggleClick}>
            {/* 햄버거 버튼 */}
            <span />
            <span />
            <span />
          </div>

          <div className="list-wrap">
            <ul className="gnb-ul">
              <GnbLi />
            </ul>
          </div>

        </nav>
      </header>
    </div>

    </>
  )

};

export default Header;
