import React from 'react';
import ClickButtonList from './unapplied/ClickButtonList.js'
import ClickButtonListWithHoc from './applied/ClickButtonList.js'

class HocTest extends React.Component {
    render() {
        return (
            <div>
                <br/>───────────────────────────────────<br/>
                1. 버튼 클릭시 목록 조회
                <ClickButtonList />
                
                <br/>───────────────────────────────────<br/>
                2. 버튼 클릭시 목록 조회(HOC 적용 예시)
                <ClickButtonListWithHoc />

            </div>
        );
    }
}

export default HocTest;
