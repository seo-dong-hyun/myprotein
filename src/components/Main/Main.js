// Main.js
// 메인 페이지를 원 페이지 스크롤로 구성 >> 총 4개의 섹션

import React from 'react';
import Fullpage, { FullPageSections, FullpageNavigation } from '@ap.cx/react-fullpage'; // 원 페이지 스크롤 npm
import './Main.css'; // 메인 페이지 css

import Banner from './Banner/Banner'; // 메인 배너
import MainSection1 from './MainSection1/MainSection1'; // 메인 섹션1
import MainSection2 from './MainSection2/MainSection2'; // 메인 섹션2
import MainSection3 from './MainSection3/MainSection3'; // 메인 섹션3



function Main() {
  return (
    <div>
      <Fullpage>
          <FullpageNavigation />
          <FullPageSections>
            <Banner />
            <MainSection1 />
            <MainSection2 />
            <MainSection3 />
          </FullPageSections>
      </Fullpage>
    </div>
  )
};

export default Main;
