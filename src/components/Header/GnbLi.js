import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Loading from '../../Loading';

function GnbLi() {

  
      const gnbLi = [
    { id: 0, name: "Home", address: "/myprotein"},
    { id: 1, name: "Protein", address: "protein"},
    { id: 2, name: "Boosters", address: "boosters"},
    { id: 3, name: "Vitamins", address: "vitamins"},
    { id: 4, name: "Event", address: "event"},
    { id: 5, name: "회원가입", address: "signUp"},

  ];

  const getEntries = (gnbLi).map((e) => { 


    return (
      <React.Fragment key={e.id}>

        <li className='gnb-li'> 
        <Link exact to={`${e.address}`} className="gnb-li-link" onClick={<Loading />}>
          {e.name}
        </Link>
        </li>
      </React.Fragment>

      )
  });



  return (
    <>

    
        {/* <li className='gnb-li'> 
        <Link exact to='/myprotein' className='gnb-li-link' onClick={() => window.location.replace()}>Home
        </Link>
        </li> */}
      {getEntries}

    </>


  )
}

export default GnbLi;
