// MainSection3.js
// 메인 섹션 3 페이지

import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';
import { useNavigate } from 'react-router-dom'; // 이동을 위한 라우터

function MainSection3() {
    const initStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff',
    }

    const navi = useNavigate();
    const naviGate = () => {
        navi('/vitamins')
    }
  return (
    <div>
        <FullpageSection style={initStyle}>
            <h1>메인 섹션 3번 페이지</h1>
            <p>비타민 페이지</p>
            <button onClick={naviGate}>자세히 보기</button>
        </FullpageSection>
    </div>
  )
}

export default MainSection3;
