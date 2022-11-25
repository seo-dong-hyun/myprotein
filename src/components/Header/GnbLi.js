import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Routes, Route } from 'react-router-dom';
import FullPageScroll from '../FullPageScroll/FullPageScroll';
import Sub1 from './Sub1';


function GnbLi() {
  
      const gnbLi = [
    { id: 0, name: "Home", address: "/", sub: '<FullPageScroll />'},
    { id: 1, name: "Protein", address: "protein", sub: '<Sub1 />'},
    { id: 2, name: "Boosters", address: "boosters", sub: '<Sub2 />'},
    { id: 3, name: "Vitamins", address: "vitamins", sub: '<Sub3 />'},
    { id: 4, name: "Event", address: "event", sub: '<Sub4 />'},
    { id: 5, name: "회원가입", address: "signUp", sub: '<Sub5 />'},

  ];

  const getEntries = (gnbLi).map((e) => { 


    return (
        <React.Fragment key={e.id}>
        <li className='gnb-li'> 
        <Link to={`${e.address}`} className="gnb-li-link">
          {e.name}

        </Link>
        </li>

        
        <Routes>
          <Route exact path='/protein' element={<Sub1 />} />
        </Routes>
        
        </React.Fragment>
      )
  });

  return (
<>
{getEntries}
</>


  )
}

export default GnbLi;
