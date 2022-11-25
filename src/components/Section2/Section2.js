// 섹션 2 페이지 ( 부스터 페이지 )

import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';


function Section2() {

    const initStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff',
    }

  return (
    <FullpageSection style={initStyle}>
        <h1>boosters ( 이미지 좌측 타이틀 우측 구성, 서브페이지 구성)</h1>
    </FullpageSection>
  )
  
};

export default Section2;
