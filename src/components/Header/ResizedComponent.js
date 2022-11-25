// 윈도우 리사이즈 시 마다 윈도우 사이즈 콘솔로그 표기
// 삭제용



import React, { useEffect, useState } from 'react' // 리액트에 이펙트 스테이트 쓰겟다


// resizzecomponent 라는 컴포넌트 생성
const ResizedComponent = () => {


    // 유즈스테이츠 생성 windowsize, setwindowsize 설정
    // w,h 객체 설정
    const [windowSize, setWindowSize] = useState({
        w: window.innerWidth,
        h: window.innerHeight,
    });


    // 핸들러 함수 생성,설정
    const handleResize = function(){
        setWindowSize({
            w: window.innerWidth,
            h: window.innerHeight,
        })
        // console.log(`x: ${window.innerWidth}, y: ${window.innerHeight}`);
   

        
    }
    const [click, setClick] = useState(false);

    // 이펙트설정 리사이즈시추가
    useEffect(()=>{ 
        if(windowSize.w <=1200){
            setClick(false);
        } else {
            setClick(true);

        }
        window.addEventListener('resize', handleResize);
        return ()=> {
            window.removeEventListener('resize', handleResize);
            // 삭제
        }
    },[])

    
    
  return (
    <div className={click ? 'pc' : "mo"}>
        x: {windowSize.w}, y: {windowSize.h};
    
    </div>
  
  )



};

export default ResizedComponent;
