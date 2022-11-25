// 메인 페이지 ( 홈 화면 )

import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage'; // 풀 페이지





function Main() {

    const initStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff',
    }

  return (
 <FullpageSection style={initStyle}>
      <h1>메인 홈페이지 (슬라이드 or 동영상 배너 구성)</h1>
    </FullpageSection>



  )

};

export default Main;
