// Banner.js
// 메인 배너

import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage'; // 풀 페이지 섹션

function Banner() {

    const initStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff',
    }

  return (
    <div>
        <FullpageSection style={initStyle}>
            <h1>메인 배너 페이지</h1>
            <p>메인 배너</p>
        </FullpageSection>
    </div>
  )
}

export default Banner;
