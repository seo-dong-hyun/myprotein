import React from 'react';
import './Page.css';

import Page2 from './Page2';

function Page1() {
  return (
    <>    
    <div className="container">
    <div className='item'>
      page1
    </div>
    <Page2 />
    </div>
    </>

  )
}

export default Page1
