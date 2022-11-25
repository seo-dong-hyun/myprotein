// 섹션 3 페이지 ( 비타민 페이지 )


import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';


function Section3() {

    const initStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff',
    }

  return (
    <FullpageSection style={initStyle}>
        <h1>vitamin (타이틀 좌측 이미지 우측 , 서브페이지 구성 )</h1>
    </FullpageSection>
  )

};

export default Section3;
