import React from 'react';
import {Routes , Route } from 'react-router-dom';
import Section1 from './components/Section1/Section1';

function Routing2() {
  return (
    <>
    <Routes>
        <Route exact path='protein' element={<Section1 />}>

        </Route>
    </Routes>
    </>

  )
}

export default Routing2;
