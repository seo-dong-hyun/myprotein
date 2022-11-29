// MainSection2.js
// 메인 섹션 2 페이지

import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';
import { useNavigate } from 'react-router-dom'; // 이동을 위한 라우터

function MainSection2() {
    const initStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff',
    }

    const navi = useNavigate();
    const naviGate = () => {
        navi('/boosters')
    }
  return (
    <div>
        <FullpageSection style={initStyle}>
            <h1>메인 섹션 2번 페이지</h1>
            <p>부스터 페이지</p>
            <button onClick={naviGate}>자세히 보기</button>
        </FullpageSection>
    </div>
  )
}

export default MainSection2;
