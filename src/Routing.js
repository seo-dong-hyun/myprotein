import React from 'react';
import {Routes , Route } from 'react-router-dom';
import Main from './components/Main/Main';

function Routing() {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Main />}>

        </Route>
    </Routes>
    </>

  )
}

export default Routing;
