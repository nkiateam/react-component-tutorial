import React from 'react';
import ClickButtonList from './unapplied/ClickButtonList.js'
import ClickButtonListWithHoc from './applied/ClickButtonList.js'

class HocTest extends React.Component {
    render() {
        return (
            <div>
                <br /><hr />
                <h2>1. 버튼 클릭시 목록 조회</h2>
                <ClickButtonList />
                
                <br /><hr />
                <h2>2. 버튼 클릭시 목록 조회(HOC 적용 예시)</h2>
                <ClickButtonListWithHoc />

            </div>
        );
    }
}

export default HocTest;
