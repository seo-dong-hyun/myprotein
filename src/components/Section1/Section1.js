// 섹션 1 페이지 ( 프로틴 섹션 )

import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';



function Section1() {

    const initStyle = { // 기본 스타일
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff',
    }

  return (
    <FullpageSection style={initStyle}>
      <h2>my protein page</h2>
    </FullpageSection>
  )

};

export default Section1;

