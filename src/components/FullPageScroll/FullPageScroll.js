// FullPageScroll.js
// 원 페이지 스크롤 >> 총 4개의 섹션

import React from "react";
import FullPage, { FullPageSections, FullpageNavigation } from '@ap.cx/react-fullpage'; // 원 페이지 스크롤
import './FullPageScroll.css';

import Main from "../Main/Main"; // 메인 페이지
import Section1 from "../Section1/Section1"; // 섹션 1
import Section2 from "../Section2/Section2"; // 섹션 2
import Section3 from "../Section3/Section3"; // 섹션 3



function FullPageScroll() {

  return (

    <FullPage>
        <FullpageNavigation />
        <FullPageSections>
            <Main />
            <Section1 />
            <Section2 />
            <Section3 /> 
        </FullPageSections>
    </FullPage>
   
  )
};

export default FullPageScroll;
